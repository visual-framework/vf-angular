import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewEncapsulation,
  Renderer2,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'vf-chatbot-standalone',
  template: `<section class="vf-content component-library-notes | vf-stack vf-stack--400">  
    <div class="vf-banner vf-banner--alert vf-banner--warning">
        <div class="vf-banner__content"><p class="vf-banner__text">
 
 <span class="vf-badge vf-badge--tertiary ">beta</span> 

        This component version is ready to be used but is still in active development.</p></div>
      </div>
  
        
        <section class="vf-intro" id="about">

  <div><!-- empty --></div>

  <div class="vf-stack">

  <h1 class="vf-intro__heading vf-intro__heading--has-tag">Chatbot Standalone

 <a href="/guidance/component-types/" class="vf-badge vf-badge--primary vf-badge--phases">container</a> </h1>
<p class="vf-lede"><span>The <code>vf-chatbot-standalone</code>   component provides a full-screen conversational interface between a user and an AI system. It is typically accessed through a dedicated route or external site. Designed for more complex interactions, it supports extended dialogues, exploration of multiple topics, and access to documents or detailed support resources.</span>
</p>


<p class="vf-intro__text">
          <a class="vf-link" href="https://github.com/visual-framework/vf-core/tree/develop/components/vf-chatbot-standalone"><img src="https://img.shields.io/badge/github-vf--chatbot--standalone-blue" alt="github location"></a>
          <a class="vf-link" href="https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-standalone"><img src="https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-standalone.svg" alt="npm version"></a>
        </p>
  </div>
</section>
  <nav class="vf-navigation vf-navigation--on-this-page | vf-u-fullbleed | vf-cluster">
  <ul class="vf-navigation__list | vf-list | vf-cluster__inner" data-vf-js-navigation-on-this-page-container="true">
    <li class="vf-navigation__item">
      
      On this page
    </li>
    <li class="vf-navigation__item">
      <a href="#usage" class="vf-navigation__link" aria-selected="true">Usage</a>
    </li>
    <li class="vf-navigation__item">
      <a href="#variants" class="vf-navigation__link">Variants</a>
    </li>
    <li class="vf-navigation__item">
      <a href="#examples" class="vf-navigation__link">Examples</a>
    </li>
    <li class="vf-navigation__item">
      <a href="#installation" class="vf-navigation__link">Install</a>
    </li>
    <li class="vf-navigation__item">
      <a href="#changelog" class="vf-navigation__link">Changelog</a>
    </li>
    <li class="vf-navigation__item">
      <a href="#assets" class="vf-navigation__link">Assets</a>
    </li>
  </ul>
</nav>
 <section class="embl-grid">
           <div class="vf-section-header"><h2 class="vf-section-header__heading" id="usage"> Usage</h2></div> 
          <article>
          <h3>When to use this component</h3>
<p>Only use the chatbot standalone if there's evidence it helps users:</p>
<ul>
<li>Engage in longer sessions or structured tasks such as report generation, data analysis, or learning journeys</li>
<li>Focus in a distraction-free environment optimized for dialogue</li>
<li>Interact with the bot as primary interface, rather than a secondary support layer</li>
<li>Access rich responses such as cards, file previews, or dynamic visualizations</li>
</ul>
<p>For example, the standalone chatbot works well when users need to complete complex workflows or explore content across multiple interactions. It is also effective when the conversation itself drives the experience, rather than supporting it. Test with users to ensure the dedicated interface supports their goals and provides clear value over embedded alternatives.</p>
<h3>When not to use this component</h3>
<p>The chatbot standalone opens in a dedicated interface and removes users from their current context. This can interrupt active tasks or create unnecessary friction for users who only need quick or simple guidance.</p>
<p>Avoid using the standalone chatbot for brief interactions, especially when users benefit from staying within the current page or task flow. A <a href="../vf-chatbot-modal">chatbot modal</a> or embedded support is usually more appropriate in these cases.</p>
<p>Do not use the standalone chatbot when:</p>
<ul>
<li>The task can be resolved with a simple search or static content</li>
<li>The chatbot does not offer a clear improvement over lighter support mechanisms</li>
<li>Accessing the chatbot disrupts processes that require deep concentration or formal</li>
<li>The chatbot lacks the intelligence or depth to sustain a meaningful experience</li>
<li>The target audience expects or benefits more from traditional, structured interfaces</li>
</ul>
<p>Test your design without a standalone chatbot first. Well-written content, embedded guidance, or contextual help may meet user needs more effectively without introducing unnecessary complexity.</p>
<h3>Deciding between modal vs standalone</h3>
<p>The <a href="../vf-chatbot-modal">chatbot modal</a> and chatbot standalone are two distinct variants for delivering conversational interfaces. Choose between them based on use case needs and task complexity.</p>
<h4>Modal</h4>
<ul>
<li>For in-context support (e.g. help with current page or workflow)</li>
<li>Access point is via a floating action button on the page</li>
<li>Supports simple tasks such as getting information</li>
</ul>
<h4>Standalone</h4>
<ul>
<li>Suitable for exploratory or focused workflows (e.g. discovering genetic variants)</li>
<li>Launched via a link (such as "Talk to our AI chat assistant")</li>
<li>Supports more complex tasks that benefit from sustained engagement</li>
</ul>
<h3>Anatomy</h3>
<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Title bar</td>
<td>Shows the chatbot name, minimise button and close button. The title bar may include a dropdown for selecting categories.</td>
</tr>
<tr>
<td>Dialogue section</td>
<td>Scrollable chat window showing the conversation log.</td>
</tr>
<tr>
<td>Intro message</td>
<td>A brief onboarding message explaining the purpose and capabilities of the chatbot. Shows the icon, title and short message (Max. 2 lines of text).</td>
</tr>
<tr>
<td>Banner</td>
<td>Used to show optional disclaimers or alerts (Max. 3 lines of text). For cases that require user consent, use a blur overlay on the background or a pre-access popup instead, as banners may be missed.</td>
</tr>
<tr>
<td>Text input area</td>
<td>Open input field for typing and sending queries. Expands up to 5 lines, after which it becomes scrollable.</td>
</tr>
</tbody>
</table>
<h3>Flows</h3>
<table>
<thead>
<tr>
<th>Flow</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td>Suggested prompts</td>
<td>Appear on the initial screen. Provide a quick-start to users with clickable queries. They help to provide context on the type of questions the user can ask on the platform. (Max. 60 characters)</td>
</tr>
<tr>
<td>Closing the chat dialogue</td>
<td>Clicking on the close icon "X" triggers a confirmation prompt to prevent accidental loss of the chat log.</td>
</tr>
<tr>
<td>Error management</td>
<td>If the chatbot is unable to provide a response to the query, display a clear error message and provide an alternative way for them to get their answers.</td>
</tr>
<tr>
<td>Links</td>
<td>Displayed in a clear underlined style. They can be shown inline or as a list.</td>
</tr>
<tr>
<td>Source attribution</td>
<td>Chips are shown in relevant paragraphs which cite the sources. Links to the sources and more details can be accessed via a "View sources" button.</td>
</tr>
<tr>
<td>Feedback on a query level</td>
<td>Users can assess the AI responses with a thumbs up/thumbs down or optional close/open response fields to give more details.</td>
</tr>
<tr>
<td>Category selection</td>
<td>A dropdown in the title bar lets users switch focus areas (e.g LLM version or data source). Single or multi-selection variants can be used depending on the use case.</td>
</tr>
</tbody>
</table>
<h3>Working example</h3>
<p>You can access working example of standalone version here:
<a href="/chatbot">Visual Framework Chatbot - Standalone</a></p>
<h3>Visual branding elements and content</h3>
<p>The Chatbot branding elements follow EMBL brand guidelines but can be updated to suit your use case. For advice on branding updates please contact the EMBL Communications Team.</p>
<p>Texts shown in the examples are placeholder content. Please review and update all wording to fit your your project needs and ensure it meets legal, accessibility and organisational requirements.</p>
<h3>Accessibility</h3>
<p>The component targets WCAG 2.1 AA accessibility standard.</p>
<h3>Install</h3>
<p>This repository is distributed with <a href="https://www.npmjs.com/">npm</a>. After <a href="https://www.npmjs.com/get-npm">installing npm</a> and <a href="https://classic.yarnpkg.com/en/docs/install">yarn</a>, you can install <code>vf-chatbot-standalone</code> and other dependant components with this command.</p>
<pre><code class="language-bash">yarn add &#64;visual-framework/vf-chatbot &#64;visual-framework/vf-chatbot-standalone
</code></pre>
<h3>Sass/CSS</h3>
<pre><code class="language-scss">&#64;import "&#64;visual-framework/vf-chatbot-standalone/index.scss";
</code></pre>
<h3>JavaScript</h3>
<pre><code class="language-javascript">

import &#123; initVFChatbot &#125; from 'vf-chatbot/vf-chatbot.js';
window.addEventListener("load", function() &#123;
  initVFChatbot(config);
&#125;);
</code></pre>
<p>where config is the configuration object with different options as described below</p>
<h4>Core Configuration Options</h4>
<pre><code class="language-javascript">const config = &#123;
  type: "standalone",
  title: "AI Assistant",
  welcome_logo: true,
  welcome_message: "Welcome! I'm here to help",
  welcome_logo_alt: "AI Assistant",
  welcome_suggestions_title: "Try asking me:",
  input_placeholder: "Ask me ...",
  welcome_max_suggestions: 4,
  disclaimer: 'Disclaimer: This chatbot is designed to assist you with general information and basic inquiries. See our <a class="vf-banner__link" target="_blank" rel="noopener noreferrer" aria-label="disclaimer notes (opens in new tab)" href="https://www.ebi.ac.uk/data-protection/privacy-notice/embl-ebi-public-website/">disclaimer notes</a>.',
  footnote: 'Review AI generated content for accuracy. <a class="vf-link" target="_blank" rel="noopener noreferrer" aria-label="Leave feedback (opens in new tab)" href="https://embl.service-now.com/esc?id=sc_cat_item&sys_id=5eeb8eb91b92e650b376da88b04bcbc1">Leave feedback</a>.',
  icons: &#123;
    assistant_avatar: "../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg",
    user_avatar: "../../assets/vf-chatbot/assets/vf-chatbot--avatar-user.svg",
    send_button: "../../assets/vf-chatbot/assets/vf-chatbot--icon-send.svg",
    main_logo_url: "../../assets/vf-chatbot/assets/vf-chatbot--icon-32x32-dark-green.svg",
    minimize: "../../assets/vf-chatbot/assets/vf-chatbot--icon-minimize.svg",
    close: "../../assets/vf-chatbot/assets/vf-chatbot--icon-close.svg"
 &#125;,
  api: &#123;
    chat_endpoint: false,
    feedback_endpoint: false,
    qa_data_url: "../../assets/vf-chatbot/assets/vf-chatbot-qa.json",
    headers:&#123;
      "Content-Type": "application/json",
      "Authorization": "Bearer your-token"
    &#125;,
    timeout: 10000
  &#125;,
  features: &#123;
    enable_welcome: true,
    enable_feedback: true,
    enable_sources: true,
    enable_welcome_suggestions: true,
    enable_typing_indicator: true,
    enable_disclaimer: true,
    enable_predefined_qa: true,
    enable_fallback_responses: true,
    enable_qa_data_loading: true,
    enable_instant_feedback: false
  &#125;,
  behavior: &#123;
    auto_scroll: true,
    typing_delay: 800,
    show_scrollbar: false
&#125;,
  selectorContext: &#123;
    chatbotRoutes: &#123;
      multiSelect: true,
      maxMultiSelect: 3,
      showSearch: true,
      showSearchThreshold: 5,
      showAllServices: true,
      showAllServicesSelected: true,
      routes: "../../assets/vf-chatbot/assets/vf-chatbot-selector-services.json",
      placeholder: "Select services",
      title: "Services",
      selector_logo_url: "../../assets/vf-chatbot/assets/vf-chatbot--icon-24x24-dark-green.svg",
      selector_logo_title: "AI Assistant"
    &#125;
  &#125;,
  handlers: &#123;
    on_message_send: "handleMessageSend",
    on_response_receive: "handleResponseReceive",
    on_feedback_submit: "handleFeedbackSubmit",
    on_suggestion_click: "handleSuggestionClick",
    on_error: "handleError",
    on_conversation_start: "handleConversationStart",
    on_conversation_end: "handleConversationEnd"
  &#125;,
  feedback_options: &#123;
    positive: [
      &#123; id: "accurate", label: "Accurate" &#125;,
      &#123; id: "easy", label: "Easy to understand" &#125;,
      &#123; id: "formatted", label: "Well formatted" &#125;
    ],
    negative: [
      &#123; id: "inaccurate", label: "Inaccurate" &#125;,
      &#123; id: "nocontext", label: "Did not use context" &#125;,
      &#123; id: "poorformat", label: "Poorly formatted" &#125;
    ]
  &#125;
&#125;;
</code></pre>
<h4>Service Selector Configuration</h4>
<p>The chatbot includes an integrated selector component which can be configured to present different selection options to user:</p>
<pre><code class="language-javascript">const selectorConfig = &#123;
  selectorContext: &#123;
    chatbotRoutes: &#123;
      // Multi-selection settings
      multiSelect: true,
      maxMultiSelect: 3,
      
      // Search functionality
      showSearch: true,
      showSearchThreshold: 5,
      
      // "All Services" option
      showAllServices: true,
      showAllServicesSelected: true,
      
      // Data source
      routes: "assets/vf-chatbot-selector-services.json",
      
      // UI labels and logo
      placeholder: "Select services",
      title: "Available Services",
      selector_logo_url: "../../assets/vf-chatbot/assets/vf-chatbot--icon-24x24-dark-green.svg",
      selector_logo_title: "AI Assistant"
    &#125;
  &#125;
&#125;;

Please note that if you want to opt for a single selection option version of the selector dropdown, you need to omit the multiSelect, maxMultiSelect, showAllServices and showAllServicesSelected properties from the selectorConfig above.
</code></pre>
<p><strong>Selector Data Format (JSON):</strong></p>
<pre><code class="language-json">&#123;
  "routes": [
    &#123;
      "id": "service-1",
      "title": "Service 1 title"
    &#125;,
    &#123;
      "id": "service-2", 
      "title": "Service 2 title"
    &#125;
  ]
&#125;
</code></pre>
<h3>Event Handling</h3>
<h4>Built-in Event Handlers</h4>
<p>Chatbot comes with a provision to allow custom event handlers. These handlers can be defined in your code to handle specific actions for different events triggered during interaction with chatbot.
Configure custom handlers for chatbot events:</p>
<pre><code class="language-javascript">const config = &#123;
  handlers: &#123;
    on_message_send: "handleMessageSend",
    on_response_receive: "handleResponseReceive", 
    on_feedback_submit: "handleFeedbackSubmit",
    on_suggestion_click: "handleSuggestionClick",
    on_error: "handleError",
    on_conversation_start: "handleConversationStart",
    on_conversation_end: "handleConversationEnd"
  &#125;
&#125;;

// Implement handler functions
function handleMessageSend(message, conversationId) &#123;
  console.log('User sent:', message);
  // Track analytics, log conversations, etc.
&#125;

function handleResponseReceive(response, sources, prompts) &#123;
  console.log('Assistant responded:', response);
  // Process response, update UI, etc.
&#125;

function handleFeedbackSubmit(feedbackData) &#123;
  console.log('Feedback received:', feedbackData);
  // Send to analytics, update models, etc.
&#125;
</code></pre>
<h4>Custom Event Listeners</h4>
<p>Likewise you can also listen to events emitted by the chatbot for specific interactions:</p>
<pre><code class="language-javascript">// Listen for specific chatbot events
document.addEventListener('vf-chatbot:message-send', (event) =&gt; &#123;
  const &#123; message, conversationId &#125; = event.detail;
  // Handle message send
&#125;);

document.addEventListener('vf-chatbot:message-receive', (event) =&gt; &#123;
  const &#123; message, conversationId &#125; = event.detail;
  // Handle message send
&#125;);

document.addEventListener('vf-chatbot-feedback:submit', (event) =&gt; &#123;
  const &#123; messageId, feedbackType, feedbackText, feedbackComment &#125; = event.detail;
  // Handle feedback submission
&#125;);

document.addEventListener('vf-chatbot-welcome:suggestion-click', (event) =&gt; &#123;
  const &#123; question &#125; = event.detail;
  // Handle suggestion clicks
&#125;);

document.addEventListener('vf-chatbot:assistant-change', (obj) =&gt; &#123;
  const &#123; selectedRoutes &#125; = obj.selectedAssistants;
  const &#123; conversationId &#125; = obj.conversationId;
  // Handle service selection
&#125;);

document.addEventListener('vf-chatbot:error', (event) =&gt; &#123;
  const &#123; message, conversationId &#125; = event.detail;
  // Handle message send
&#125;);

document.addEventListener('vf-chatbot:conversation-start', (event) =&gt; &#123;
  const &#123; message, conversationId &#125; = event.detail;
  // Handle conversation start
&#125;);

document.addEventListener('vf-chatbot:conversation-end', (event) =&gt; &#123;
  const &#123; message, conversationId &#125; = event.detail;
  // Handle conversation end
&#125;);

</code></pre>
<h3>Feedback System Configuration</h3>
<h4>Feedback (with form)</h4>
<pre><code class="language-javascript">const config = &#123;
  features: &#123;
    enable_feedback: true,
    enable_instant_feedback: false // Default
  &#125;,
  feedback_options: &#123;
    positive: [
      &#123; id: "accurate", label: "Accurate" &#125;,
      &#123; id: "easy", label: "Easy to understand" &#125;,
      &#123; id: "formatted", label: "Well formatted" &#125;
    ],
    negative: [
      &#123; id: "inaccurate", label: "Inaccurate answer" &#125;,
      &#123; id: "nocontext", label: "Did not use context" &#125;,
      &#123; id: "poorformat", label: "Poorly formatted" &#125;
    ]
  &#125;
&#125;;
</code></pre>
<h4>Instant Feedback (one-click)</h4>
<pre><code class="language-javascript">const config = &#123;
  features: &#123;
    enable_feedback: true,
    enable_instant_feedback: true // Thumbs up/down only
  &#125;
&#125;;
</code></pre>
<h3>Q&amp;A Data Configuration</h3>
<p>Load predefined questions and answers:</p>
<pre><code class="language-javascript">const config = &#123;
  features: &#123;
    enable_predefined_qa: true,
    enable_qa_data_loading: true
  &#125;,
  api: &#123;
    qa_data_url: "path/to/qa-data.json"
  &#125;
&#125;;
</code></pre>
<p><strong>Q&amp;A Data Format:</strong></p>
<pre><code class="language-json">&#123;
  "predefinedQA": &#123;
    "How can I submit genomic data to EMBL-EBI?": &#123;
      "answer": "To submit genomic data, visit the EMBL-EBI submission portal, where you’ll find step-by-step guides and tools for submitting sequencing data, assemblies, annotations, and more.",
      "sources": [
        &#123;
          "domain": "ebi.ac.uk",
          "title": "EMBL's European Bioinformatics Institute",
          "url": "https://www.ebi.ac.uk/",
          "description": "Run BLAST searches against comprehensive sequence databases at EMBL-EBI."
        &#125;,
        &#123;
          "domain": "ena-docs.readthedocs.io",
          "title": "ENA Documentation",
          "url": "https://ena-docs.readthedocs.io/en/latest/",
          "description": "ENA Documentation"
        &#125;
      ]
    &#125;
  &#125;,
  "fallbackResponses": [
    &#123;
      "answer": "I'm sorry, I'm having trouble connecting to my knowledge base right now. Could you try again in a moment?",
      "prompts": [
        &#123;
          "action_text": "Contact support team",
          "action_url": "tel:+44 1223 494 444"
        &#125;,
        &#123;
          "action_text": "Submit a support request",
          "action_url": "https://www.ebi.ac.uk/about/contact/support/"
        &#125;
      ]
    &#125;
  ]
&#125;
</code></pre>
<h3>API Integration</h3>
<h4>Chat Endpoint</h4>
<p>Your chat API should accept POST requests:</p>
<pre><code class="language-javascript">// Request format
&#123;
  "message": "User's question",
  "conversationId": "unique-id",
  "context": &#123;
    "selectedServices": ["service-1", "service-2"]
  &#125;
&#125;

// Response format
&#123;
  "response": "Assistant's answer",
  "sources": [
    &#123;
      "title": "Documentation Link",
      "url": "https://example.com/docs"
    &#125;
  ],
  "prompts": [
    &#123;
      "action_text": "Learn More",
      "action_url": "https://example.com/learn"
    &#125;
  ]
&#125;
</code></pre>
<h4>Custom Welcome Screen</h4>
<pre><code class="language-javascript">const config = &#123;
  features: &#123;
    enable_welcome: true,
    enable_welcome_suggestions: true
  &#125;,
  welcome_logo: true,
  welcome_message: "Welcome to our AI assistant!",
  welcome_suggestions_title: "Popular questions:",
  welcome_max_suggestions: 6
&#125;;
</code></pre>
<h4>Source Citations</h4>
<pre><code class="language-javascript">const config = &#123;
  features: &#123;
    enable_sources: true
    enable_sources_custom_format: true,
  &#125;
&#125;;

// Sources in API response (predefined format)
&#123;
  "response": "Here's the information...",
  "sources": [
    &#123;
      "title": "Official Documentation", 
      "url": "https://docs.example.com",
      "description": "Complete guide to the platform"
    &#125;
  ]
&#125;
// Sources in API response (custom format)
&#123;
  "response": "Here's the information...",
  "sources": "&lt;nav&gt;&lt;ul&gt;&lt;li&gt;&lt;a href='#nowhere' title='Lorum ipsum dolor sit amet'&gt;Lorem&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href='#nowhere' title='Aliquam tincidunt mauris eu risus'&gt;Aliquam&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href='#nowhere' title='Morbi in sem quis dui placerat ornare'&gt;Morbi&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href='#nowhere' title='Praesent dapibus, neque id cursus faucibus'&gt;Praesent&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href='#nowhere' title='Pellentesque fermentum dolor'&gt;Pellentesque&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/nav&gt;"
&#125;
</code></pre>
<h4>Action Prompts</h4>
<pre><code class="language-javascript">// Action prompts in API response
&#123;
  "response": "I can help you with that...",
  "prompts": [
    &#123;
      "action_text": "Start Tutorial",
      "action_url": "https://example.com/tutorial"
    &#125;,
    &#123;
      "action_text": "Contact Support", 
      "action_url": "mailto:support&#64;example.com"
    &#125;
  ]
&#125;
</code></pre>
<h3>Angular</h3>
<p>This component now has Angular support which has been tested on Angular version 18.2.21</p>
<ol>
<li>
<p>Install <code>yarn add &#64;visual-framework/vf-chatbot &#64;visual-framework/vf-chatbot-standalone</code></p>
</li>
<li>
<p>Import in the JS file where you want to include this component</p>
<pre><code>import VFChatbot from '&#64;visual-framework/vf-chatbot/vf-chatbot.react';

Make sure you have the jsx support enabled with babel. Alternatively, you can also copy the vf-chatbot.react.js file from below to your react project and import as per the location.
</code></pre>
</li>
<li>
<p>Can be used as</p>
<pre><code>&lt;vf-chatbot config=&#123;chatbotConfig&#125; &gt; &lt;/vf-chatbot &gt;
</code></pre>
</li>
<li>
<p>Styling changes</p>
<p>You should install <a href="https://stable.visual-framework.dev/components/vf-sass-starter">vf-sass-starter</a> for the styles and then add below code in your main SCSS file</p>
<pre><code>$vf-font-plex-mono-prefix: '~&#64;visual-framework/vf-font-plex-mono/assets';
$vf-font-plex-sans-prefix: '~&#64;visual-framework/vf-font-plex-sans/assets';

&#64;import '~&#64;visual-framework//vf-sass-starter/index.scss';
&#64;import "~&#64;visual-framework/vf-link/vf-link.scss";
&#64;import "~&#64;visual-framework/vf-chatbot/vf-chatbot.scss";
&#64;import "~&#64;visual-framework/vf-chatbot-modal/index.scss";
&#64;import "~&#64;visual-framework/vf-chatbot-standalone/index.scss";
</code></pre>
</li>
<li>
<p>Usage:</p>
<pre><code>&lt;vf-chatbot config=&#123;chatbotConfig&#125; &gt; &lt;/vf-chatbot &gt;
</code></pre>
</li>
</ol>

          </article>
        </section>
       <h2 id="variants" class="vf-text vf-text-heading--1 vf-text--invert">Variants</h2> 
        
          

          <article class="vf-stack vf-stack--lg vf-u-margin__bottom--1200" style="clear: both; /* insurance against strange components */">
            
              
                <div class="vf-u-padding--400" style="overflow: auto; background-image: linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%);background-size: 20px 20px; background-position-x: 0px, 10px, 10px, 0px;background-position-y: 0px, 0px, -10px, 10px;">
<div
      #standaloneRef
      class="vf-content vf-chatbot-standalone-container"
      [attr.data-vf-js-chatbot-standalone-container]="true"
      [attr.data-vf-chatbot-config]="config | json"
      [attr.aria-label]="config?.title + ' chatbot'"
    >
      <!-- Header -->
      <div class="vf-chatbot-standalone__header">
        <div class="vf-chatbot-standalone__header-left">
          <ng-container *ngIf="config?.selectorContext; else fallbackSelector">
            <vf-chatbot-selector
              [context]="config?.selectorContext"
            ></vf-chatbot-selector>
          </ng-container>
          <ng-template #fallbackSelector>
            <div class="vf-chatbot-selector">
              <div class="vf-chatbot-selector__title">
                <img
                  [src]="config?.selectorContext?.selector_logo_url"
                  [alt]="config?.selectorContext?.selector_logo_title"
                />
                <div class="vf-chatbot-selector__title-content">
                  <span class="vf-chatbot-selector__main-text">
                    &#123;&#123; config?.selectorContext?.selector_logo_title &#125;&#125;
                  </span>
                </div>
              </div>
            </div>
          </ng-template>
        </div>
      </div>

      <!-- Chatbot Main -->
      <div
        class="vf-chatbot-standalone | vf-u-background-color-ui--grey--light vf-u-margin__bottom--400"
        data-vf-js-chatbot-standalone
      >
        <div
          class="vf-chatbot-standalone__content"
          data-vf-js-chatbot-standalone-content
        >
          <!-- Welcome -->
          <vf-chatbot-welcome
            *ngIf="config?.features?.enable_welcome"
            [qaData]="qaData"
            [welcome_logo]="config?.welcome_logo"
            [welcome_logo_url]="config?.icons?.main_logo_url"
            [welcome_logo_alt]="config?.welcome_logo_alt"
            [welcome_title]="config?.title"
            [welcome_message]="config?.welcome_message"
            [welcome_suggestions_title]="config?.welcome_suggestions_title"
            [enable_welcome_suggestions]="config?.features?.enable_welcome_suggestions"
            [welcome_max_suggestions]="config?.welcome_max_suggestions"
            [qa_data_url]="config?.api?.qa_data_url"
            [enable_qa_data_loading]="config?.features?.enable_qa_data_loading"
            [enable_predefined_qa]="config?.features?.enable_predefined_qa"
            [enable_fallback_responses]="config?.features?.enable_fallback_responses"
          ></vf-chatbot-welcome>

          <!-- Messages -->
          <div
            [ngClass]="{
              'vf-chatbot-standalone__messages': config?.behavior?.show_scrollbar !== false,
              'vf-chatbot-standalone__messages-no-scrollbar': config?.behavior?.show_scrollbar === false
            &#125;"
            data-vf-js-chatbot-standalone-messages
            [attr.data-auto-scroll]="config?.behavior?.auto_scroll"
          >
          <vf-chatbot-prompt
          *ngFor="let msg of messages"
          [type]="msg.type"
          [avatar]="msg.avatar"
          [content]="msg.content"
          [sources]="sources"
          [prompts]="prompts"
          [allowFeedback]="config?.features?.enable_feedback"
        ></vf-chatbot-prompt>
            
          </div>

          <!-- Disclaimer -->
          <div
            *ngIf="config?.disclaimer && config?.features?.enable_disclaimer"
            class="vf-chatbot-standalone__disclaimer" data-vf-js-chatbot-standalone-disclaimer
          >
            <div class="vf-banner vf-banner--alert vf-banner--info">
              <div class="vf-banner__content">
                <p
                  class="vf-banner__text"
                  [innerHTML]="config.disclaimer"
                ></p>
                <button
                  role="button"
                  aria-label="close notification banner"
                  class="vf-button vf-button--icon vf-button--dismiss | vf-banner__button"
                  (click)="config?.onDismissDisclaimer?.()"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>dismiss banner</title>
                    <path
                      d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="vf-chatbot-standalone__input-container">
          <div class="vf-chatbot-standalone__input-wrapper">
            <label
              class="vf-u-sr-only"
              id="vf-chatbot-standalone-input-label"
              for="vf-chatbot-standalone-input"
              >Ask me</label
            >
            <textarea
              id="vf-chatbot-standalone-input"
              data-vf-js-chatbot-standalone-input
              aria-labelledby="vf-chatbot-standalone-input-label"
              class="vf-chatbot-standalone__input vf-form__textarea vf-u-padding__left--400"
              [placeholder]="config?.input_placeholder"
              rows="1"
            ></textarea>
            <button
              class="vf-chatbot-standalone__send-button"
              aria-label="Send message"
              data-vf-js-chatbot-standalone-send
            >
              <img [src]="config?.icons?.send_button" alt="Send" />
            </button>
          </div>

          <div
            *ngIf="config?.footnote"
            class="vf-chatbot-standalone__footnote vf-u-margin__top--200"
            [innerHTML]="config.footnote"
            data-vf-js-chatbot-standalone-footnote
          ></div>
        </div>

        <!-- Dialog -->
        <vf-chatbot-dialog
          [title]="config?.dialogProps?.title"
          [message]="config?.dialogProps?.message"
          [cancelLabel]="config?.dialogProps?.cancelLabel"
          [confirmLabel]="config?.dialogProps?.confirmLabel"
          (confirm)="onDialogConfirm.emit()"
          (cancel)="onDialogCancel.emit()"
        ></vf-chatbot-dialog>
        <template id="user-message-template">
          <vf-chatbot-prompt
          [type]= "'user'"
          [content]= "'Hello!'"
          [avatar]="{
            src: config?.icons?.user_avatar,
            alt: 'Your avatar',
            name: 'You'
          &#125;"
        ></vf-chatbot-prompt>
        </template>
        <ng-container *ngIf="config?.features?.enable_typing_indicator">

          <template id = "loading-indicator-template">
            <vf-chatbot-prompt
              [type]="'assistant'"
              [isLoading]="true"
              [avatar]="{
                src: config?.icons?.assistant_avatar,
                alt: config?.title,
                name: config?.title
              &#125;"
            ></vf-chatbot-prompt>
          </template>

        </ng-container>
        <template id="assistant-message-template">
        <vf-chatbot-prompt
          [type]= "'assistant'"
          [content]= "'How can I help you?'"
          [avatar]="{
            src: config?.icons?.assistant_avatar,
            alt: config?.title,
            name: config?.title
          &#125;"
          [allowFeedback]= "config?.features?.enable_feedback"
          ></vf-chatbot-prompt>
        <!-- Feedback -->
        <div 
          class="vf-chatbot-feedback vf-u-margin__top--200" 
          *ngIf="config?.features?.enable_feedback" 
          data-vf-js-chatbot-feedback>
      </div>
        </template>
        
        <template id="single-action-prompt-template">
        <vf-chatbot-action-prompt>
        [action_text]= "",
        [action_url]= "#"
        ></vf-chatbot-action-prompt>
        </template>
        <template id="action-prompts-template">
          <div class="vf-chatbot-action-prompts vf-u-margin__top--400">
          <div class="vf-chatbot-action-prompts__list" data-vf-js-action-prompts-list>
            <!-- Individual prompts will be populated here -->
          </div>
        </div>
        </template>
        <ng-container *ngIf="config?.features?.enable_feedback">
        
        <template id="feedback-positive-template">
          <vf-chatbot-feedback
          [type]="'positive'"
          [feedback_options]="config?.feedback_options?.positive"></vf-chatbot-feedback>
        </template>
        <template id="feedback-negative-template">
        <vf-chatbot-feedback
         [type]="'negative'"
        [feedback_options]="config?.feedback_options?.negative"></vf-chatbot-feedback>
        </template>
       </ng-container>
      </div>
    </div>
    </div>
    <details class="vf-details vf-box vf-box--outline">
                <summary class="vf-details--summary">Nunjucks syntax</summary>

      <p>Depending on your environment you'll want to use <code>render</code> or <code>include</code>. As a rule of thumb: server-side use <code>include</code>, precompiled browser use <code>render</code>. If you're using <a href="https://github.com/visual-framework/vf-eleventy">vf-eleventy</a> you should use <code>include</code>.</p>
<h3>Using <code>include</code></h3>
<p>You'll need to pass a context object from your code or Yaml file (<a href="https://github.com/visual-framework/vf-eleventy/blob/master/src/site/index.yml">example</a>), as well as the path to the Nunjucks template. Nunjucks' <code>include</code> is an abstraction of <code>render</code> and provides some additional portability.</p>


                <pre><code>
&#123;% set context fromYourYamlFile %&#125;
- or -
&#123;% set context = &#123; 
"component-type" : "container",
"hide-from-sitemenu" : true,
"config" : [object Object],

 &#125;
%&#125;
&#123;% include "../path_to/vf-chatbot-standalone/vf-chatbot-standalone.njk" %&#125;
                </code></pre>
      <h3>Using <code>render</code></h3>
<p>This approach is best for bare-bones Nunjucks environments, such as precompiled templates with the Nunjucks slim runtime where <code>include</code> is not be available.</p>

                <pre><code>
&#123;% render '&#64;vf-chatbot-standalone', &#123;
  "component-type" : "container",
  "hide-from-sitemenu" : true,
  "config" : [object Object],
  &#125;
%&#125;
                </code></pre>
              </details>
              
              
              
              
              <details class="vf-details vf-box vf-box--outline">
                <summary class="vf-details--summary">React syntax</summary>
                
                  <pre><code>&lt;VFChatbot config=&#123;chatbotConfig&#125; /&gt;
                  </code></pre>
                
              </details>
              
            

            
            <details class="vf-details vf-box vf-box--outline">
              <summary class="vf-details--summary">HTML</summary>
              <pre><span class="hljs-comment">&lt;!-- Standalone Chatbot --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-content vf-chatbot-standalone-container"</span> <span class="hljs-attr">data-vf-js-chatbot-standalone-container</span> <span class="hljs-attr">data-vf-chatbot-config</span>=<span class="hljs-string">"&#123;<span class="hljs-symbol">&amp;quot;</span>type<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>standalone<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>title<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>AI Assistant<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>welcome_logo<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>welcome_message<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>Welcome! I<span class="hljs-symbol">&amp;#39;</span>m here to help<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>welcome_logo_alt<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>AI Assistant<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>welcome_suggestions_title<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>Try asking me:<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>input_placeholder<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>Ask me ...<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>welcome_max_suggestions<span class="hljs-symbol">&amp;quot;</span>:4,<span class="hljs-symbol">&amp;quot;</span>icons<span class="hljs-symbol">&amp;quot;</span>:&#123;<span class="hljs-symbol">&amp;quot;</span>assistant_avatar<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>user_avatar<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>../../assets/vf-chatbot/assets/vf-chatbot--avatar-user.svg<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>send_button<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>../../assets/vf-chatbot/assets/vf-chatbot--icon-send.svg<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>main_logo_url<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>../../assets/vf-chatbot/assets/vf-chatbot--icon-32x32-dark-green.svg<span class="hljs-symbol">&amp;quot;</span>&#125;,<span class="hljs-symbol">&amp;quot;</span>api<span class="hljs-symbol">&amp;quot;</span>:&#123;<span class="hljs-symbol">&amp;quot;</span>chat_endpoint<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>/api/chat<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>feedback_endpoint<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>/api/feedback<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>qa_data_url<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>../../assets/vf-chatbot/assets/vf-chatbot-qa.json<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>headers<span class="hljs-symbol">&amp;quot;</span>:&#123;<span class="hljs-symbol">&amp;quot;</span>Content-Type<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>application/json<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>Authorization<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>Bearer your-token<span class="hljs-symbol">&amp;quot;</span>&#125;,<span class="hljs-symbol">&amp;quot;</span>timeout<span class="hljs-symbol">&amp;quot;</span>:10000&#125;,<span class="hljs-symbol">&amp;quot;</span>features<span class="hljs-symbol">&amp;quot;</span>:&#123;<span class="hljs-symbol">&amp;quot;</span>enable_welcome<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>enable_feedback<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>enable_sources<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>enable_sources_custom_format<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>enable_welcome_suggestions<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>enable_typing_indicator<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>enable_disclaimer<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>enable_predefined_qa<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>enable_fallback_responses<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>enable_qa_data_loading<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>enable_instant_feedback<span class="hljs-symbol">&amp;quot;</span>:false&#125;,<span class="hljs-symbol">&amp;quot;</span>behavior<span class="hljs-symbol">&amp;quot;</span>:&#123;<span class="hljs-symbol">&amp;quot;</span>auto_scroll<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>typing_delay<span class="hljs-symbol">&amp;quot;</span>:800,<span class="hljs-symbol">&amp;quot;</span>show_scrollbar<span class="hljs-symbol">&amp;quot;</span>:false&#125;,<span class="hljs-symbol">&amp;quot;</span>selectorContext<span class="hljs-symbol">&amp;quot;</span>:&#123;<span class="hljs-symbol">&amp;quot;</span>chatbotRoutes<span class="hljs-symbol">&amp;quot;</span>:&#123;<span class="hljs-symbol">&amp;quot;</span>multiSelect<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>maxMultiSelect<span class="hljs-symbol">&amp;quot;</span>:3,<span class="hljs-symbol">&amp;quot;</span>showSearch<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>showSearchThreshold<span class="hljs-symbol">&amp;quot;</span>:5,<span class="hljs-symbol">&amp;quot;</span>showAllServices<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>showAllServicesSelected<span class="hljs-symbol">&amp;quot;</span>:true,<span class="hljs-symbol">&amp;quot;</span>routes<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>../../assets/vf-chatbot/assets/vf-chatbot-selector-services.json<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>placeholder<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>Select services<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>title<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>Services<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>selector_logo_url<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>../../assets/vf-chatbot/assets/vf-chatbot--icon-24x24-dark-green.svg<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>selector_logo_title<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>AI Assistant<span class="hljs-symbol">&amp;quot;</span>&#125;&#125;,<span class="hljs-symbol">&amp;quot;</span>handlers<span class="hljs-symbol">&amp;quot;</span>:&#123;<span class="hljs-symbol">&amp;quot;</span>on_message_send<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>handleMessageSend<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>on_response_receive<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>handleResponseReceive<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>on_feedback_submit<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>handleFeedbackSubmit<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>on_suggestion_click<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>handleSuggestionClick<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>on_error<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>handleError<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>on_conversation_start<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>handleConversationStart<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>on_conversation_end<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>handleConversationEnd<span class="hljs-symbol">&amp;quot;</span>&#125;,<span class="hljs-symbol">&amp;quot;</span>disclaimer<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>Disclaimer: This chatbot is designed to assist you with general information and basic inquiries. See our <span class="hljs-symbol">&amp;lt;</span>a class=<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span>vf-banner__link<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span> target=<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span>_blank<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span> rel=<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span>noopener noreferrer<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span> aria-label=<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span>disclaimer notes (opens in new tab)<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span> href=<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span>https://www.ebi.ac.uk/data-protection/privacy-notice/embl-ebi-public-website/<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span><span class="hljs-symbol">&amp;gt;</span>disclaimer notes<span class="hljs-symbol">&amp;lt;</span>/a<span class="hljs-symbol">&amp;gt;</span>.<span class="hljs-symbol">&amp;quot;</span>,<span class="hljs-symbol">&amp;quot;</span>footnote<span class="hljs-symbol">&amp;quot;</span>:<span class="hljs-symbol">&amp;quot;</span>Review AI generated content for accuracy. <span class="hljs-symbol">&amp;lt;</span>a class=<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span>vf-link<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span> target=<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span>_blank<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span> rel=<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span>noopener noreferrer<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span> aria-label=<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span>Leave feedback (opens in new tab)<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span> href=<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span>https://embl.service-now.com/esc?id=sc_cat_item<span class="hljs-symbol">&amp;amp;</span>sys_id=5eeb8eb91b92e650b376da88b04bcbc1<span class="hljs-symbol">&amp;#92;</span><span class="hljs-symbol">&amp;quot;</span><span class="hljs-symbol">&amp;gt;</span>Leave feedback<span class="hljs-symbol">&amp;lt;</span>/a<span class="hljs-symbol">&amp;gt;</span>.<span class="hljs-symbol">&amp;quot;</span>&#125;"</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-standalone__header"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-standalone__header-left"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-selector"</span> <span class="hljs-attr">data-vf-js-chatbot-selector</span> <span class="hljs-attr">data-routes-path</span>=<span class="hljs-string">"../../assets/vf-chatbot/assets/vf-chatbot-selector-services.json"</span> <span class="hljs-attr">data-multiselect</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">data-max-multiselect</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">data-show-search</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">data-show-all-services</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">data-show-all-services-selected</span>=<span class="hljs-string">"true"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-selector__title"</span> <span class="hljs-attr">data-vf-js-selector-toggle</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../../assets/vf-chatbot/assets/vf-chatbot--icon-24x24-dark-green.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"AI Assistant"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-selector__title-content vf-u-margin__left--200"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-selector__main-text"</span>&gt;</span>AI Assistant<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-selector__title-text"</span>&gt;</span>Services<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-selector__chevron"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"32"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"31"</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">"0 0 32 31"</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"none"</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">"http://www.w3.org/2000/svg"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">g</span> <span class="hljs-attr">clip-path</span>=<span class="hljs-string">"url(#clip0_3647_8230)"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span class="hljs-string">"M15.999 19.0975C15.7378 19.098 15.479 19.0468 15.2377 18.9468C14.9963 18.8469 14.7771 18.7001 14.5926 18.5151L8.32863 11.9279C8.21951 11.8137 8.13399 11.6791 8.07698 11.5318C8.01998 11.3845 7.99261 11.2274 7.99645 11.0695C8.00028 10.9116 8.03525 10.756 8.09934 10.6117C8.16342 10.4673 8.25537 10.337 8.36992 10.2283C8.48446 10.1195 8.61934 10.0344 8.76683 9.97791C8.91432 9.92139 9.07152 9.89454 9.2294 9.89889C9.38729 9.90325 9.54277 9.93872 9.68692 10.0033C9.83107 10.0678 9.96106 10.1602 10.0694 10.2751L15.7094 16.2143C15.7467 16.2537 15.7916 16.2851 15.8414 16.3066C15.8912 16.3281 15.9448 16.3391 15.999 16.3391C16.0533 16.3391 16.1069 16.3281 16.1567 16.3066C16.2065 16.2851 16.2514 16.2537 16.2886 16.2143L21.9286 10.2751C22.037 10.1602 22.167 10.0678 22.3112 10.0033C22.4553 9.93872 22.6108 9.90325 22.7687 9.89889C22.9266 9.89454 23.0838 9.92139 23.2312 9.97791C23.3787 10.0344 23.5136 10.1195 23.6282 10.2283C23.7427 10.337 23.8347 10.4673 23.8987 10.6117C23.9628 10.756 23.9978 10.9116 24.0016 11.0695C24.0055 11.2274 23.9781 11.3845 23.9211 11.5318C23.8641 11.6791 23.7786 11.8137 23.6694 11.9279L17.439 18.4991C17.2503 18.6888 17.0259 18.8394 16.7788 18.9421C16.5316 19.0448 16.2667 19.0976 15.999 19.0975Z"</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"#707372"</span> /&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">g</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">defs</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">clipPath</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"clip0_3647_8230"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">rect</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"16"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"16"</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"white"</span> <span class="hljs-attr">transform</span>=<span class="hljs-string">"translate(8 6.5)"</span> /&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">clipPath</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">defs</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-selector__dropdown"</span> <span class="hljs-attr">data-vf-js-selector-dropdown</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-selector__search"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-u-sr-only"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vf-chatbot-selector-search-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"vf-chatbot-selector-search"</span>&gt;</span>Type to search<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vf-chatbot-selector-search"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"vf-chatbot-selector-search-label"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Select services"</span> <span class="hljs-attr">data-vf-js-selector-search</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>


          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-selector__header"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">data-max-select</span>=<span class="hljs-string">"3"</span>&gt;</span>Select up to 3 services<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-selector__clear"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">data-vf-js-selector-clear</span>&gt;</span>Clear all<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-selector__list"</span> <span class="hljs-attr">data-vf-js-chatbot-selector-list</span>&gt;</span>
            <span class="hljs-comment">&lt;!-- Routes will be populated dynamically via JavaScript --&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-standalone | vf-u-background-color-ui--grey--light vf-u-margin__bottom--400"</span> <span class="hljs-attr">data-vf-js-chatbot-standalone</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-standalone__content"</span> <span class="hljs-attr">data-vf-js-chatbot-standalone-content</span>&gt;</span>

      <span class="hljs-comment">&lt;!-- Welcome Screen --&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"region"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Chatbot welcome screen"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-welcome"</span> <span class="hljs-attr">data-vf-js-chatbot-welcome</span> <span class="hljs-attr">data-max-questions</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">data-enable-qa-data-loading</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">data-enable-predefined-qa</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">data-enable-fallback-responses</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">data-qa-data-url</span>=<span class="hljs-string">"../../assets/vf-chatbot/assets/vf-chatbot-qa.json"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-welcome__content"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-welcome__logo"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../../assets/vf-chatbot/assets/vf-chatbot--icon-32x32-dark-green.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"AI Assistant"</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-welcome__title"</span>&gt;</span>AI Assistant<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-welcome__message"</span>&gt;</span>
            Welcome! I'm here to help
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-welcome__suggestions"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-welcome__suggestions-title vf-u-margin__bottom--200"</span>&gt;</span>Try asking me:<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-welcome__suggestions-grid"</span> <span class="hljs-attr">data-vf-js-chatbot-welcome-suggestions-grid</span>&gt;</span>
            <span class="hljs-comment">&lt;!-- Suggestions will be populated dynamically from qa.json using the template below --&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

        <span class="hljs-comment">&lt;!-- Template for welcome suggestions using vf-chatbot-action-prompt --&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"welcome-suggestion-template"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-action-prompt"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-action-prompt__link"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"button"</span>&gt;</span>

            <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

      <span class="hljs-comment">&lt;!-- Messages Container --&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-standalone__messages-no-scrollbar"</span> <span class="hljs-attr">data-vf-js-chatbot-standalone-messages</span> <span class="hljs-attr">data-auto-scroll</span>=<span class="hljs-string">"true"</span>&gt;</span>
        <span class="hljs-comment">&lt;!-- Messages will be added here dynamically --&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

      <span class="hljs-comment">&lt;!-- Disclaimer Banner --&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-standalone__disclaimer"</span> <span class="hljs-attr">data-vf-js-chatbot-standalone-disclaimer</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-banner vf-banner--alert vf-banner--info"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-banner__content"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-banner__text"</span>&gt;</span>Disclaimer: This chatbot is designed to assist you with general information and basic inquiries. See our <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-banner__link"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"_blank"</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"noopener noreferrer"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"disclaimer notes (opens in new tab)"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://www.ebi.ac.uk/data-protection/privacy-notice/embl-ebi-public-website/"</span>&gt;</span>disclaimer notes<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"close notification banner"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-button vf-button--icon vf-button--dismiss | vf-banner__button"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">"http://www.w3.org/2000/svg"</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">"0 0 24 24"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>dismiss banner<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span class="hljs-string">"M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z"</span> /&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-comment">&lt;!-- Input Container --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-standalone__input-container"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-standalone__input-wrapper"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-u-sr-only"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vf-chatbot-standalone-input-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"vf-chatbot-standalone-input"</span>&gt;</span>Ask me<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vf-chatbot-standalone-input"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"vf-chatbot-standalone-input-label"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-standalone__input vf-form__textarea vf-u-padding__left--400"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Ask me ..."</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">data-vf-js-chatbot-standalone-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-standalone__send-button"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Send message"</span> <span class="hljs-attr">data-vf-js-chatbot-standalone-send</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../../assets/vf-chatbot/assets/vf-chatbot--icon-send.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Send"</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-standalone__footnote vf-u-margin__top--200"</span> <span class="hljs-attr">data-vf-js-chatbot-standalone-footnote</span>&gt;</span>
        Review AI generated content for accuracy. <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-link"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"_blank"</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"noopener noreferrer"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Leave feedback (opens in new tab)"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://embl.service-now.com/esc?id=sc_cat_item&amp;sys_id=5eeb8eb91b92e650b376da88b04bcbc1"</span>&gt;</span>Leave feedback<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>.
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-comment">&lt;!-- Templates --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"feedback-positive-template"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__form vf-u-margin__top--400"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__form-content vf-u-padding--400"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__form-content-header"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__title"</span>&gt;</span>Tell us more (optional)<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__form-close vf-button vf-button--icon vf-button--dismiss | vf-banner__button"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close feedback form"</span> <span class="hljs-attr">data-vf-js-feedback-form-close</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">"http://www.w3.org/2000/svg"</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">"0 0 24 24"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>dismiss banner<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span class="hljs-string">"M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z"</span> /&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__options"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__option"</span> <span class="hljs-attr">data-feedback-option</span>=<span class="hljs-string">"accurate"</span>&gt;</span>
              Accurate answer
            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__option"</span> <span class="hljs-attr">data-feedback-option</span>=<span class="hljs-string">"easy"</span>&gt;</span>
              Easy to understand
            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__option"</span> <span class="hljs-attr">data-feedback-option</span>=<span class="hljs-string">"formatted"</span>&gt;</span>
              Well formatted
            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__option"</span> <span class="hljs-attr">data-feedback-option</span>=<span class="hljs-string">"helpful"</span>&gt;</span>
              Helpful
            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vf-chatbot-feedback-comment-title"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"vf-chatbot-feedback-comment"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__comment-title"</span>&gt;</span>Comments<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vf-chatbot-feedback-comment"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"vf-chatbot-feedback-comment-title"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__comment"</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__submit vf-u-padding--200"</span> <span class="hljs-attr">data-vf-js-feedback-submit</span>&gt;</span>
            Submit
          <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"feedback-negative-template"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__form vf-u-margin__top--400"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__form-content vf-u-padding--400"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__form-content-header"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__title"</span>&gt;</span>Tell us more (optional)<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__form-close vf-button vf-button--icon vf-button--dismiss | vf-banner__button"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close feedback form"</span> <span class="hljs-attr">data-vf-js-feedback-form-close</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">"http://www.w3.org/2000/svg"</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">"0 0 24 24"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>dismiss banner<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span class="hljs-string">"M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z"</span> /&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__options"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__option"</span> <span class="hljs-attr">data-feedback-option</span>=<span class="hljs-string">"inaccurate"</span>&gt;</span>
              Inaccurate answer
            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__option"</span> <span class="hljs-attr">data-feedback-option</span>=<span class="hljs-string">"nocontext"</span>&gt;</span>
              Did not use context
            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__option"</span> <span class="hljs-attr">data-feedback-option</span>=<span class="hljs-string">"poorformat"</span>&gt;</span>
              Poorly formatted
            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__option"</span> <span class="hljs-attr">data-feedback-option</span>=<span class="hljs-string">"nothelpful"</span>&gt;</span>
              Not helpful
            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vf-chatbot-feedback-comment-title"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"vf-chatbot-feedback-comment"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__comment-title"</span>&gt;</span>Comments<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vf-chatbot-feedback-comment"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"vf-chatbot-feedback-comment-title"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__comment"</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback__submit vf-u-padding--200"</span> <span class="hljs-attr">data-vf-js-feedback-submit</span>&gt;</span>
            Submit
          <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"user-message-template"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message vf-chatbot-message--user  vf-u-margin__top--400"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__avatar vf-u-margin__bottom--200"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__avatar-name"</span>&gt;</span>You<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../../assets/vf-chatbot/assets/vf-chatbot--avatar-user.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"You"</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__content vf-u-padding--200"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__content-prompt vf-u-padding__left--200  vf-u-padding__right--200"</span>&gt;</span>
            Hello!
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"assistant-message-template"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message vf-chatbot-message--assistant  vf-u-margin__top--400"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__avatar vf-u-margin__bottom--200"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"AI Assistant"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__avatar-name"</span>&gt;</span>AI Assistant<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__content vf-u-padding--200"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__content-prompt vf-u-padding__left--200  vf-u-padding__right--200"</span>&gt;</span>
            How can I help you?
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-feedback vf-u-margin__top--200"</span> <span class="hljs-attr">data-vf-js-chatbot-feedback</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"loading-indicator-template"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message vf-chatbot-message--assistant vf-chatbot-message--loading  vf-u-margin__top--400"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__avatar vf-u-margin__bottom--200"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"AI Assistant"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__avatar-name"</span>&gt;</span>AI Assistant<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__content vf-u-padding--200"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__content-loading-dots"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Loading"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"status"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__dot"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__dot"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-message__dot"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"action-prompts-template"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-action-prompts vf-u-margin__top--400"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-action-prompts__list"</span> <span class="hljs-attr">data-vf-js-action-prompts-list</span>&gt;</span>
          <span class="hljs-comment">&lt;!-- Individual prompts will be populated here --&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"single-action-prompt-template"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-action-prompt"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vf-chatbot-action-prompt__link"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"button"</span>&gt;</span>

        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              </pre>
            </details>
          </article>
        

      
       <h2 id="examples" class="vf-text vf-text-heading--1 vf-text--invert">Examples</h2> 
      
        
      

      <details class="vf-details">
<summary class="vf-details--summary" id="installation">Installation info</summary>
<p>This repository is distributed with <a href="https://www.npmjs.com/">npm</a>. After <a href="https://www.npmjs.com/get-npm">installing npm</a> and <a href="https://classic.yarnpkg.com/en/docs/install">yarn</a>, you can install <code>vf-chatbot-standalone</code> and other dependant components with this command.</p>
<pre><code class="language-bash">yarn add &#64;visual-framework/vf-chatbot &#64;visual-framework/vf-chatbot-standalone
</code></pre>
<h3>Sass/CSS</h3>
<pre><code class="language-scss">&#64;import "&#64;visual-framework/vf-chatbot-standalone/index.scss";
</code></pre>
<h3>JavaScript</h3>
<pre><code class="language-javascript">
</code><p><code class="language-javascript">import &#123; initVFChatbot &#125; from 'vf-chatbot/vf-chatbot.js';
window.addEventListener("load", function() &#123;
initVFChatbot(config);
&#125;);
</code></p></pre><p></p>
<p>where config is the configuration object with different options as described below</p>
<h4>Core Configuration Options</h4>
<pre><code class="language-javascript">const config = &#123;
type: "standalone",
title: "AI Assistant",
welcome_logo: true,
welcome_message: "Welcome! I'm here to help",
welcome_logo_alt: "AI Assistant",
welcome_suggestions_title: "Try asking me:",
input_placeholder: "Ask me ...",
welcome_max_suggestions: 4,
disclaimer: 'Disclaimer: This chatbot is designed to assist you with general information and basic inquiries. See our &lt;a class="vf-banner__link" target="_blank" rel="noopener noreferrer" aria-label="disclaimer notes (opens in new tab)" href="https://www.ebi.ac.uk/data-protection/privacy-notice/embl-ebi-public-website/"&gt;disclaimer notes&lt;/a&gt;.',
footnote: 'Review AI generated content for accuracy. &lt;a class="vf-link" target="_blank" rel="noopener noreferrer" aria-label="Leave feedback (opens in new tab)" href="https://embl.service-now.com/esc?id=sc_cat_item&amp;sys_id=5eeb8eb91b92e650b376da88b04bcbc1"&gt;Leave feedback&lt;/a&gt;.',
icons: &#123;
assistant_avatar: "../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg",
user_avatar: "../../assets/vf-chatbot/assets/vf-chatbot--avatar-user.svg",
send_button: "../../assets/vf-chatbot/assets/vf-chatbot--icon-send.svg",
main_logo_url: "../../assets/vf-chatbot/assets/vf-chatbot--icon-32x32-dark-green.svg",
minimize: "../../assets/vf-chatbot/assets/vf-chatbot--icon-minimize.svg",
close: "../../assets/vf-chatbot/assets/vf-chatbot--icon-close.svg"
&#125;,
api: &#123;
chat_endpoint: false,
feedback_endpoint: false,
qa_data_url: "../../assets/vf-chatbot/assets/vf-chatbot-qa.json",
headers:&#123;
"Content-Type": "application/json",
"Authorization": "Bearer your-token"
&#125;,
timeout: 10000
&#125;,
features: &#123;
enable_welcome: true,
enable_feedback: true,
enable_sources: true,
enable_welcome_suggestions: true,
enable_typing_indicator: true,
enable_disclaimer: true,
enable_predefined_qa: true,
enable_fallback_responses: true,
enable_qa_data_loading: true,
enable_instant_feedback: false
&#125;,
behavior: &#123;
auto_scroll: true,
typing_delay: 800,
show_scrollbar: false
&#125;,
selectorContext: &#123;
chatbotRoutes: &#123;
multiSelect: true,
maxMultiSelect: 3,
showSearch: true,
showSearchThreshold: 5,
showAllServices: true,
showAllServicesSelected: true,
routes: "../../assets/vf-chatbot/assets/vf-chatbot-selector-services.json",
placeholder: "Select services",
title: "Services",
selector_logo_url: "../../assets/vf-chatbot/assets/vf-chatbot--icon-24x24-dark-green.svg",
selector_logo_title: "AI Assistant"
&#125;
&#125;,
handlers: &#123;
on_message_send: "handleMessageSend",
on_response_receive: "handleResponseReceive",
on_feedback_submit: "handleFeedbackSubmit",
on_suggestion_click: "handleSuggestionClick",
on_error: "handleError",
on_conversation_start: "handleConversationStart",
on_conversation_end: "handleConversationEnd"
&#125;,
feedback_options: &#123;
positive: [
&#123; id: "accurate", label: "Accurate" &#125;,
&#123; id: "easy", label: "Easy to understand" &#125;,
&#123; id: "formatted", label: "Well formatted" &#125;
],
negative: [
&#123; id: "inaccurate", label: "Inaccurate" &#125;,
&#123; id: "nocontext", label: "Did not use context" &#125;,
&#123; id: "poorformat", label: "Poorly formatted" &#125;
]
&#125;
&#125;;
</code></pre>
<h4>Service Selector Configuration</h4>
<p>The chatbot includes an integrated selector component which can be configured to present different selection options to user:</p>
<pre><code class="language-javascript">const selectorConfig = &#123;
selectorContext: &#123;
chatbotRoutes: &#123;
// Multi-selection settings
multiSelect: true,
maxMultiSelect: 3,
<p>// Search functionality
showSearch: true,
showSearchThreshold: 5,</p>
<p>// "All Services" option
showAllServices: true,
showAllServicesSelected: true,</p>
<p>// Data source
routes: "assets/vf-chatbot-selector-services.json",</p>
<p>// UI labels and logo
placeholder: "Select services",
title: "Available Services",
selector_logo_url: "../../assets/vf-chatbot/assets/vf-chatbot--icon-24x24-dark-green.svg",
selector_logo_title: "AI Assistant"
&#125;
&#125;
&#125;;</p>
</code><p><code class="language-javascript">Please note that if you want to opt for a single selection option version of the selector dropdown, you need to omit the multiSelect, maxMultiSelect, showAllServices and showAllServicesSelected properties from the selectorConfig above.
</code></p></pre><p></p>
<p><strong>Selector Data Format (JSON):</strong></p>
<pre><code class="language-json">&#123;
"routes": [
&#123;
"id": "service-1",
"title": "Service 1 title"
&#125;,
&#123;
"id": "service-2", 
"title": "Service 2 title"
&#125;
]
&#125;
</code></pre>
<h3>Event Handling</h3>
<h4>Built-in Event Handlers</h4>
<p>Chatbot comes with a provision to allow custom event handlers. These handlers can be defined in your code to handle specific actions for different events triggered during interaction with chatbot.
Configure custom handlers for chatbot events:</p>
<pre><code class="language-javascript">const config = &#123;
handlers: &#123;
on_message_send: "handleMessageSend",
on_response_receive: "handleResponseReceive", 
on_feedback_submit: "handleFeedbackSubmit",
on_suggestion_click: "handleSuggestionClick",
on_error: "handleError",
on_conversation_start: "handleConversationStart",
on_conversation_end: "handleConversationEnd"
&#125;
&#125;;
<p>// Implement handler functions
function handleMessageSend(message, conversationId) &#123;
console.log('User sent:', message);
// Track analytics, log conversations, etc.
&#125;</p>
<p>function handleResponseReceive(response, sources, prompts) &#123;
console.log('Assistant responded:', response);
// Process response, update UI, etc.
&#125;</p>
</code><p><code class="language-javascript">function handleFeedbackSubmit(feedbackData) &#123;
console.log('Feedback received:', feedbackData);
// Send to analytics, update models, etc.
&#125;
</code></p></pre><p></p>
<h4>Custom Event Listeners</h4>
<p>Likewise you can also listen to events emitted by the chatbot for specific interactions:</p>
<pre><code class="language-javascript">// Listen for specific chatbot events
document.addEventListener('vf-chatbot:message-send', (event) =&gt; &#123;
const &#123; message, conversationId &#125; = event.detail;
// Handle message send
&#125;);
<p>document.addEventListener('vf-chatbot:message-receive', (event) =&gt; &#123;
const &#123; message, conversationId &#125; = event.detail;
// Handle message send
&#125;);</p>
<p>document.addEventListener('vf-chatbot-feedback:submit', (event) =&gt; &#123;
const &#123; messageId, feedbackType, feedbackText, feedbackComment &#125; = event.detail;
// Handle feedback submission
&#125;);</p>
<p>document.addEventListener('vf-chatbot-welcome:suggestion-click', (event) =&gt; &#123;
const &#123; question &#125; = event.detail;
// Handle suggestion clicks
&#125;);</p>
<p>document.addEventListener('vf-chatbot:assistant-change', (obj) =&gt; &#123;
const &#123; selectedRoutes &#125; = obj.selectedAssistants;
const &#123; conversationId &#125; = obj.conversationId;
// Handle service selection
&#125;);</p>
<p>document.addEventListener('vf-chatbot:error', (event) =&gt; &#123;
const &#123; message, conversationId &#125; = event.detail;
// Handle message send
&#125;);</p>
<p>document.addEventListener('vf-chatbot:conversation-start', (event) =&gt; &#123;
const &#123; message, conversationId &#125; = event.detail;
// Handle conversation start
&#125;);</p>
<p>document.addEventListener('vf-chatbot:conversation-end', (event) =&gt; &#123;
const &#123; message, conversationId &#125; = event.detail;
// Handle conversation end
&#125;);</p>
</code><p><code class="language-javascript"></code></p></pre><p></p>
<h3>Feedback System Configuration</h3>
<h4>Feedback (with form)</h4>
<pre><code class="language-javascript">const config = &#123;
features: &#123;
enable_feedback: true,
enable_instant_feedback: false // Default
&#125;,
feedback_options: &#123;
positive: [
&#123; id: "accurate", label: "Accurate" &#125;,
&#123; id: "easy", label: "Easy to understand" &#125;,
&#123; id: "formatted", label: "Well formatted" &#125;
],
negative: [
&#123; id: "inaccurate", label: "Inaccurate answer" &#125;,
&#123; id: "nocontext", label: "Did not use context" &#125;,
&#123; id: "poorformat", label: "Poorly formatted" &#125;
]
&#125;
&#125;;
</code></pre>
<h4>Instant Feedback (one-click)</h4>
<pre><code class="language-javascript">const config = &#123;
features: &#123;
enable_feedback: true,
enable_instant_feedback: true // Thumbs up/down only
&#125;
&#125;;
</code></pre>
<h3>Q&amp;A Data Configuration</h3>
<p>Load predefined questions and answers:</p>
<pre><code class="language-javascript">const config = &#123;
features: &#123;
enable_predefined_qa: true,
enable_qa_data_loading: true
&#125;,
api: &#123;
qa_data_url: "path/to/qa-data.json"
&#125;
&#125;;
</code></pre>
<p><strong>Q&amp;A Data Format:</strong></p>
<pre><code class="language-json">&#123;
"predefinedQA": &#123;
"How can I submit genomic data to EMBL-EBI?": &#123;
"answer": "To submit genomic data, visit the EMBL-EBI submission portal, where you’ll find step-by-step guides and tools for submitting sequencing data, assemblies, annotations, and more.",
"sources": [
&#123;
  "domain": "ebi.ac.uk",
  "title": "EMBL's European Bioinformatics Institute",
  "url": "https://www.ebi.ac.uk/",
  "description": "Run BLAST searches against comprehensive sequence databases at EMBL-EBI."
&#125;,
&#123;
  "domain": "ena-docs.readthedocs.io",
  "title": "ENA Documentation",
  "url": "https://ena-docs.readthedocs.io/en/latest/",
  "description": "ENA Documentation"
&#125;
]
&#125;
&#125;,
"fallbackResponses": [
&#123;
"answer": "I'm sorry, I'm having trouble connecting to my knowledge base right now. Could you try again in a moment?",
"prompts": [
&#123;
  "action_text": "Contact support team",
  "action_url": "tel:+44 1223 494 444"
&#125;,
&#123;
  "action_text": "Submit a support request",
  "action_url": "https://www.ebi.ac.uk/about/contact/support/"
&#125;
]
&#125;
]
&#125;
</code></pre>
<h3>API Integration</h3>
<h4>Chat Endpoint</h4>
<p>Your chat API should accept POST requests:</p>
<pre><code class="language-javascript">// Request format
&#123;
"message": "User's question",
"conversationId": "unique-id",
"context": &#123;
"selectedServices": ["service-1", "service-2"]
&#125;
&#125;
</code><p><code class="language-javascript">// Response format
&#123;
"response": "Assistant's answer",
"sources": [
&#123;
"title": "Documentation Link",
"url": "https://example.com/docs"
&#125;
],
"prompts": [
&#123;
"action_text": "Learn More",
"action_url": "https://example.com/learn"
&#125;
]
&#125;
</code></p></pre><p></p>
<h4>Custom Welcome Screen</h4>
<pre><code class="language-javascript">const config = &#123;
features: &#123;
enable_welcome: true,
enable_welcome_suggestions: true
&#125;,
welcome_logo: true,
welcome_message: "Welcome to our AI assistant!",
welcome_suggestions_title: "Popular questions:",
welcome_max_suggestions: 6
&#125;;
</code></pre>
<h4>Source Citations</h4>
<pre><code class="language-javascript">const config = &#123;
features: &#123;
enable_sources: true
enable_sources_custom_format: true,
&#125;
&#125;;
</code><p><code class="language-javascript">// Sources in API response (predefined format)
&#123;
"response": "Here's the information...",
"sources": [
&#123;
"title": "Official Documentation",
"url": "https://docs.example.com",
"description": "Complete guide to the platform"
&#125;
]
&#125;
// Sources in API response (custom format)
&#123;
"response": "Here's the information...",
"sources": <code>&amp;lt;nav&amp;gt; &amp;lt;ul&amp;gt; &amp;lt;li&amp;gt;&amp;lt;a href=&amp;quot;#nowhere&amp;quot; title=&amp;quot;Lorum ipsum dolor sit amet&amp;quot;&amp;gt;Lorem&amp;lt;/a&amp;gt;&amp;lt;/li&amp;gt; &amp;lt;li&amp;gt;&amp;lt;a href=&amp;quot;#nowhere&amp;quot; title=&amp;quot;Aliquam tincidunt mauris eu risus&amp;quot;&amp;gt;Aliquam&amp;lt;/a&amp;gt;&amp;lt;/li&amp;gt; &amp;lt;li&amp;gt;&amp;lt;a href=&amp;quot;#nowhere&amp;quot; title=&amp;quot;Morbi in sem quis dui placerat ornare&amp;quot;&amp;gt;Morbi&amp;lt;/a&amp;gt;&amp;lt;/li&amp;gt; &amp;lt;li&amp;gt;&amp;lt;a href=&amp;quot;#nowhere&amp;quot; title=&amp;quot;Praesent dapibus, neque id cursus faucibus&amp;quot;&amp;gt;Praesent&amp;lt;/a&amp;gt;&amp;lt;/li&amp;gt; &amp;lt;li&amp;gt;&amp;lt;a href=&amp;quot;#nowhere&amp;quot; title=&amp;quot;Pellentesque fermentum dolor&amp;quot;&amp;gt;Pellentesque&amp;lt;/a&amp;gt;&amp;lt;/li&amp;gt; &amp;lt;/ul&amp;gt; &amp;lt;/nav&amp;gt;</code>
&#125;
</code></p></pre><p></p>
<h4>Action Prompts</h4>
<pre><code class="language-javascript">// Action prompts in API response
&#123;
"response": "I can help you with that...",
"prompts": [
&#123;
"action_text": "Start Tutorial",
"action_url": "https://example.com/tutorial"
&#125;,
&#123;
"action_text": "Contact Support", 
"action_url": "mailto:support&#64;example.com"
&#125;
]
&#125;
</code></pre>
<h3>React</h3>
<p>This component now has React support which has been tested on react version 18.2.0</p>
<ol>
<li>
<p>Install <code>yarn add &#64;visual-framework/vf-chatbot &#64;visual-framework/vf-chatbot-standalone</code></p>
</li>
<li>
<p>Import in the JS file where you want to include this component</p>
<pre><code>import VFChatbot from '&#64;visual-framework/vf-chatbot/vf-chatbot.react';
</code><p><code>Make sure you have the jsx support enabled with babel. Alternatively, you can also copy the vf-chatbot.react.js file from below to your react project and import as per the location.
</code></p></pre><p></p>
</li>
<li>
<p>Can be used as</p>
<pre><code>&lt;VFChatbot config=&#123;chatbotConfig&#125; /&gt;
</code><p><code>where chatbotConfig is defined as above. Please make sure to specify paths appended with <code></code>
e.g. assistant_avatar: <code>/assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg</code>,
</code></p></pre><p></p>
</li>
<li>
<p>Styling changes</p>
<p>You should install <a href="https://stable.visual-framework.dev/components/vf-sass-starter">vf-sass-starter</a> for the styles and then add below code in your main SCSS file</p>
<pre><code>$vf-font-plex-mono-prefix: '~&#64;visual-framework/vf-font-plex-mono/assets';
$vf-font-plex-sans-prefix: '~&#64;visual-framework/vf-font-plex-sans/assets';
</code><p><code>&#64;import '~&#64;visual-framework//vf-sass-starter/index.scss';
&#64;import "~&#64;visual-framework/vf-link/vf-link.scss";
&#64;import "~&#64;visual-framework/vf-chatbot/vf-chatbot.scss";
&#64;import "~&#64;visual-framework/vf-chatbot-modal/index.scss";
&#64;import "~&#64;visual-framework/vf-chatbot-standalone/index.scss";
</code></p></pre><p></p>
</li>
<li>
<p>Usage:</p>
<pre><code>&lt;VFChatbot config=&#123;chatbotConfig&#125; /&gt;
</code></pre>
</li>
</ol>
</details>
<div class="vf-stack vf-stack--custom" style="--vf-stack-margin--custom: .5rem;">
<h3>Changelog</h3>
<details class="vf-details" id="changelog">
<summary class="vf-details--summary">Changelog</summary>
<h1>Changelog</h1>
<h3>1.0.0-beta.4</h3>
<ul>
<li>Updated : Standalone variant initialization moved to <code>vf-chatbot</code> component</li>
<li>Updated : Added more config options</li>
<li>Updated : Changes for chatbot modal variant</li>
<li>Fixed: Added code to return feedback comments</li>
<li>Added : React support <a href="https://github.com/visual-framework/vf-core/issues/2314">Tracking issue</a></li>
</ul>
<h3>1.0.0-beta.3</h3>
<ul>
<li>Version bump</li>
</ul>
<h3>1.0.0-beta.2</h3>
<ul>
<li>Updated package.json with correct settings</li>
</ul>
<h3>1.0.0-beta.1</h3>
<ul>
<li>Initial version</li>
<li>Auto-resizing textarea (1-5 rows with scroll)</li>
<li>Configurable Q&amp;A data loading with fallback responses</li>
<li>Enhanced accessibility</li>
<li>Comprehensive event handling system</li>
</ul>
</details>
</div>
<h3>Assets <span id="assets"></span></h3>
<ul>
<li><a href="/assets/vf-chatbot-standalone/vf-chatbot-standalone.njk">Nunjucks template</a></li>
<li><a href="/assets/vf-chatbot-standalone/vf-chatbot-standalone.config.yml">Config</a></li>
<li><a href="/assets/vf-chatbot-standalone/CHANGELOG.md">CHANGELOG.md</a></li>
<li><a href="/assets/vf-chatbot-standalone/vf-chatbot-standalone.js">vf-chatbot-standalone.js</a></li>
<li><a href="/assets/vf-chatbot-standalone/vf-chatbot-standalone.react.js">vf-chatbot-standalone.react.js</a></li>
<li><a href="/assets/vf-chatbot-standalone/vf-chatbot-standalone.scss">vf-chatbot-standalone.scss</a></li>
</ul>

    

    
      <hr>
<br>
<p class="vf-text-body vf-text-body--4">
File system location: <code>components/vf-chatbot-standalone</code>
</p>

    

  </section>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class VfChatbotStandaloneAngularComponent implements OnInit, AfterViewInit {
  @Input() config: any = {};
  @Input() messages: any[] = [];
  @Input() sources: any[] = [];
  @Input() prompts: any[] = [];
  @Input() inputValue = '';

  @Output() onSendMessage = new EventEmitter<void>();
  @Output() onInputChange = new EventEmitter<Event>();
  @Output() onFeedback = new EventEmitter<any>();
  @Output() onDialogConfirm = new EventEmitter<void>();
  @Output() onDialogCancel = new EventEmitter<void>();

  @ViewChild('standaloneRef') standaloneRef!: ElementRef;

  qaData: any[] = [];
  private loadedScripts = new Set<string>();

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {}

  async ngAfterViewInit() {
    console.log('VF Chatbot Standalone component initializing...');
    
    try {
      // Load only the working scripts individually
      await this.loadWorkingScripts();
      
      // Initialize chatbot functionality  
      this.initializeChatbot();
      
    } catch (error) {
      console.error('Failed to load chatbot scripts:', error);
      
      // Fallback: try basic initialization in case scripts are already loaded
      console.log('Trying fallback initialization...');
      this.initializeChatbot();
    }
    
    console.log('Chatbot standalone component ready', this.standaloneRef);
  }

  /**
   * Load chatbot scripts as ES6 modules
   */
  private async loadWorkingScripts(): Promise<void> {
    console.log('Loading ES6 modules...');
    
    // All chatbot files are ES6 modules (have exports)
    const moduleScripts = [
      '/assets/vf-chatbot-fab/vf-chatbot-fab.js',
      '/assets/vf-chatbot-dialog/vf-chatbot-dialog.js',
      '/assets/vf-chatbot-feedback/vf-chatbot-feedback.js',
      '/assets/vf-chatbot-selector/vf-chatbot-selector.js',
      '/assets/vf-chatbot-sources/vf-chatbot-sources.js',
      '/assets/vf-chatbot-welcome/vf-chatbot-welcome.js'
    ];
    
    // These have both imports AND exports, so they need their dependencies loaded first
    const moduleScriptsWithDependencies = [
      '/assets/vf-chatbot/vf-chatbot.js',               // Has imports from other modules
      '/assets/vf-chatbot-modal/vf-chatbot-modal.js',   // Has imports from other modules
      '/assets/vf-chatbot-standalone/vf-chatbot-standalone.js' // Has imports from other modules
    ];
    
    // Load independent modules first
    for (const scriptSrc of moduleScripts) {
      try {
        await this.loadSingleScript(scriptSrc);
      } catch (error) {
        console.warn(`Skipped ${scriptSrc}:`, error);
      }
    }
    
    // Then load modules with dependencies
    for (const scriptSrc of moduleScriptsWithDependencies) {
      try {
        await this.loadSingleScript(scriptSrc);
      } catch (error) {
        console.warn(`Skipped ${scriptSrc}:`, error);
      }
    }
  }

  /**
   * Load a single script as ES6 module
   */
  private async loadSingleScript(src: string): Promise<void> {
    if (this.loadedScripts.has(src)) {
      console.log(`Script already loaded in cache: ${src}`);
      return;
    }

    console.log(`Attempting to load module ${src} from ${window.location.href}`);

    try {
      // @ts-ignore
      await import(/* webpackIgnore: true */ src);
      this.loadedScripts.add(src);
      console.log(`Dynamically imported module: ${src}`);
      return;
    } catch (err) {
      console.warn(`Dynamic import failed for ${src}, falling back to script tag:`, err);
    }

    return new Promise((resolve) => {
      const existingScript = this.document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        console.log(`Script already loaded in DOM: ${src}`);
        this.loadedScripts.add(src);
        resolve();
        return;
      }

      const script = this.renderer.createElement('script');
      script.type = 'module';
      script.src = src;
      script.async = true;

      script.onload = () => {
        this.loadedScripts.add(src);
        console.log(`Loaded ES6 module (script tag): ${src}`);
        resolve();
      };

      script.onerror = (error: any) => {
        console.error(`Failed to load module via script tag: ${src}`, error);
        this.loadedScripts.add(src + '_failed');
        resolve();
      };

      this.renderer.appendChild(this.document.head, script);
    });
  }

  /**
   * Initialize chatbot functionality after scripts are loaded
   */
  private initializeChatbot(): void {
    console.log('Initializing chatbot functionality...');
    
    // Access the globally exposed initialization functions
    try {
      let initializedCount = 0;
      
      // All potential initialization functions from ES6 modules
      const allInitFunctions = [
        'initVFChatbotFab',
        'initVFChatbotDialog', 
        'initVFChatbotFeedback',
        'initVFChatbotSelector',
        'initVFChatbotSources',
        'initVFChatbotWelcome',
        'initVFChatbotStandalone', // Now loaded as ES6 module
        'initVFChatbotModal',      // Now loaded as ES6 module  
        'initVFChatbot'            // Now loaded as ES6 module
      ];
      
      allInitFunctions.forEach(funcName => {
        if (typeof (window as any)[funcName] === 'function') {
          try {
            (window as any)[funcName]();
            console.log(`${funcName} initialized`);
            initializedCount++;
          } catch (error) {
            console.warn(`${funcName} failed to initialize:`, error);
          }
        } else {
          console.log(`${funcName} not available (module may not have loaded)`);
        }
      });
      
      console.log(`Chatbot initialization complete. ${initializedCount} components initialized.`);
      
      if (initializedCount === 0) {
        console.warn('No chatbot functions were initialized. Check that ES6 modules loaded correctly.');
      }
      
    } catch (error) {
      console.error('Error initializing chatbot functionality:', error);
    }
  }
}
