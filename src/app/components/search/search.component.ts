import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { COMPONENT_SEARCH_INDEX, SearchPage } from './search-index';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchTerm = '';
  results: SearchPage[] = [];

  private querySubscription?: Subscription;
  private searchInputTimeout?: ReturnType<typeof setTimeout>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.querySubscription = this.route.queryParamMap.subscribe((params) => {
      this.searchTerm = this.sanitizeQuery(params.get('search_query') || '');
      this.renderResults();
    });
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();

    if (this.searchInputTimeout) {
      clearTimeout(this.searchInputTimeout);
    }
  }

  onSearchInput(searchTerm: string): void {
    if (this.searchInputTimeout) {
      clearTimeout(this.searchInputTimeout);
    }

    this.searchInputTimeout = setTimeout(() => {
      const sanitizedSearchTerm = this.sanitizeQuery(searchTerm);
      this.searchTerm = sanitizedSearchTerm;
      this.renderResults();
    }, 600);
  }

  private renderResults(): void {
    const normalizedTerm = this.normalizeSearchTerm(this.searchTerm);

    if (!normalizedTerm) {
      this.results = [];
      return;
    }

    this.results = [...COMPONENT_SEARCH_INDEX]
      .map((page) => ({
        page,
        score: this.getScore(page, normalizedTerm)
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.page);
  }

  private getScore(page: SearchPage, normalizedTerm: string): number {
    const searchableText = this.normalizeSearchTerm(
      `${page.title} ${page.text} ${page.url}`
    );

    if (!searchableText.includes(normalizedTerm)) {
      return 0;
    }

    let score = 10;

    if (this.normalizeSearchTerm(page.title).startsWith(normalizedTerm)) {
      score += 100;
    }

    if (this.normalizeSearchTerm(page.url).includes(normalizedTerm)) {
      score += 20;
    }

    return score;
  }

  private normalizeSearchTerm(value: string): string {
    return value
      .toLowerCase()
      .replace(/vf-/g, '')
      .replace(/-/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private sanitizeQuery(value: string): string {
    return value.replace(/(<([^>]+)>)/gi, '').trim();
  }
}
