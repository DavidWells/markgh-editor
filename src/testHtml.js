export default `<p>Note: This branch and README covers the upcoming 2.0 release. View&nbsp;<a href="https://github.com/quilljs/quill/tree/1.3.6" rel="noopener noreferrer" target="_blank">1.x docs here</a>.</p><h1 class="ql-align-center"><a href="https://quilljs.com/" rel="noopener noreferrer" target="_blank">Quill Rich Text Editor</a></h1><p class="ql-align-center"><a href="https://quilljs.com/" rel="noopener noreferrer" target="_blank"><img src="https://camo.githubusercontent.com/3e9a6019c30cfb802c984ae1ea64d738cdf02ccc8136ea8778d3d1f1510ae64b/68747470733a2f2f7175696c6c6a732e636f6d2f6173736574732f696d616765732f6c6f676f2e737667" alt="Quill Logo" width="180"></a></p><p class="ql-align-center"><a href="https://github.com/quilljs/quill#quickstart" rel="noopener noreferrer" target="_blank"><b>Quickstart</b></a>&nbsp;•&nbsp;<a href="https://quilljs.com/docs/" rel="noopener noreferrer" target="_blank"><b>Documentation</b></a>&nbsp;•&nbsp;<a href="https://github.com/quilljs/quill/blob/master/.github/DEVELOPMENT.md" rel="noopener noreferrer" target="_blank"><b>Development</b></a>&nbsp;•&nbsp;<a href="https://github.com/quilljs/quill/blob/master/.github/CONTRIBUTING.md" rel="noopener noreferrer" target="_blank"><b>Contributing</b></a>&nbsp;•&nbsp;<a href="https://quilljs.com/playground/" rel="noopener noreferrer" target="_blank"><b>Interactive Playground</b></a></p><p class="ql-align-center"><a href="https://travis-ci.org/quilljs/quill" rel="noopener noreferrer" target="_blank"><img src="https://camo.githubusercontent.com/da155761847c691f2aa5c0e46a4fc616e34467c3ba407e773a260c19495038bb/68747470733a2f2f6170702e7472617669732d63692e636f6d2f7175696c6c6a732f7175696c6c2e7376673f6272616e63683d646576656c6f70" alt="Build Status"></a><a href="https://travis-ci.org/quilljs/quill" rel="noopener noreferrer" target="_blank">&nbsp;</a><a href="https://npmjs.com/package/quill" rel="noopener noreferrer" target="_blank"><img src="https://camo.githubusercontent.com/27efc06c5abd81047385a0025315af19936a82002cb51b6535c71338bbe7963e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7175696c6c2e737667" alt="Version"></a><a href="https://npmjs.com/package/quill" rel="noopener noreferrer" target="_blank">&nbsp;</a><a href="https://npmjs.com/package/quill" rel="noopener noreferrer" target="_blank"><img src="https://camo.githubusercontent.com/be4b486a0b52be3c1a39c44f5cbf44c2c1e8bde0b0f7af3a405cd53665bb78db/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f7175696c6c2e737667" alt="Downloads"></a></p><p class="ql-align-center"><a href="https://saucelabs.com/u/quill" rel="noopener noreferrer" target="_blank"><img src="https://camo.githubusercontent.com/30312d83a601c1acbf95115d1b790993b6b2a7bc1233ae8c40b157b6d268e3cb/68747470733a2f2f63646e2e7175696c6c6a732e636f6d2f62616467652e7376673f763d32" alt="Test Status"></a></p><p><a href="https://quilljs.com/" rel="noopener noreferrer" target="_blank">Quill</a>&nbsp;is a modern rich text editor built for compatibility and extensibility. It was created by&nbsp;<a href="https://twitter.com/jhchen" rel="noopener noreferrer" target="_blank">Jason Chen</a>&nbsp;and&nbsp;<a href="https://twitter.com/byronmilligan" rel="noopener noreferrer" target="_blank">Byron Milligan</a>&nbsp;and actively maintained by&nbsp;<a href="https://slab.com/" rel="noopener noreferrer" target="_blank">Slab</a>.</p><p>To get started, check out&nbsp;<a href="https://quilljs.com/" rel="noopener noreferrer" target="_blank">https://quilljs.com/</a>&nbsp;for documentation, guides, and live demos!</p><h2>Quickstart</h2><p>Instantiate a new Quill object with a css selector for the div that should become the editor.</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-comment">&lt;!-- Include Quill stylesheet --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://cdn.quilljs.com/1.0.0/quill.snow.css"</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- Create the toolbar container --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"toolbar"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ql-bold"</span>&gt;</span>Bold<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ql-italic"</span>&gt;</span>Italic<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- Create the editor container --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"editor"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hello World!<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- Include the Quill library --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.quilljs.com/1.0.0/quill.js"</span>&gt;&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-comment">&lt;!-- Initialize Quill editor --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-keyword">var</span> editor = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Quill</span>(<span class="hljs-string">'#editor'</span>, {
    <span class="hljs-attr">modules</span>: { <span class="hljs-attr">toolbar</span>: <span class="hljs-string">'#toolbar'</span> },
    <span class="hljs-attr">theme</span>: <span class="hljs-string">'snow'</span>,
  });
<span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</pre><p>Take a look at the&nbsp;<a href="https://quilljs.com/" rel="noopener noreferrer" target="_blank">Quill</a>&nbsp;website for more documentation, guides and&nbsp;<a href="https://quilljs.com/playground/" rel="noopener noreferrer" target="_blank">live playground</a>!</p><h2>Download</h2><ul><li><a href="https://www.npmjs.com/package/quill" rel="noopener noreferrer" target="_blank">npm</a>&nbsp;-&nbsp;<code>npm install quill</code></li><li>tar -&nbsp;<a href="https://github.com/quilljs/quill/releases" rel="noopener noreferrer" target="_blank">https://github.com/quilljs/quill/releases</a></li></ul><h3>CDN</h3><pre class="ql-syntax" spellcheck="false"><span class="hljs-comment">&lt;!-- Main Quill library --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"//cdn.quilljs.com/1.0.0/quill.js"</span>&gt;&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"//cdn.quilljs.com/1.0.0/quill.min.js"</span>&gt;&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-comment">&lt;!-- Theme included stylesheets --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"//cdn.quilljs.com/1.0.0/quill.snow.css"</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"//cdn.quilljs.com/1.0.0/quill.bubble.css"</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- Core build with no theme, formatting, non-essential modules --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"//cdn.quilljs.com/1.0.0/quill.core.css"</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"//cdn.quilljs.com/1.0.0/quill.core.js"</span>&gt;&lt;/<span class="hljs-name">script</span>&gt;</span>
</pre><h2>Community</h2><p>Get help or stay up to date.</p><ul><li><a href="https://github.com/quilljs/quill/blob/develop/.github/CONTRIBUTING.md" rel="noopener noreferrer" target="_blank">Contribute</a>&nbsp;on&nbsp;<a href="https://github.com/quilljs/quill/issues" rel="noopener noreferrer" target="_blank">Issues</a></li><li>Follow&nbsp;<a href="https://twitter.com/jhchen" rel="noopener noreferrer" target="_blank">@jhchen</a>&nbsp;and&nbsp;<a href="https://twitter.com/quilljs" rel="noopener noreferrer" target="_blank">@quilljs</a>&nbsp;on Twitter</li><li>Ask questions on&nbsp;<a href="https://stackoverflow.com/questions/tagged/quill" rel="noopener noreferrer" target="_blank">Stack Overflow</a></li><li>If privacy is required, email&nbsp;<a href="mailto:support@quilljs.com" rel="noopener noreferrer" target="_blank">support@quilljs.com</a></li></ul><h2>License</h2><p>BSD 3-clause</p>`