"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const pseudoRaw = {
    pseudoclasses: [
        {
            name: ':active',
            desc: 'Applies while an element is being activated by the user. For example, between the times the user presses the mouse button and releases it.'
        },
        {
            name: ':any-link',
            desc: 'Represents an element that acts as the source anchor of a hyperlink. Applies to both visited and unvisited links.'
        },
        {
            name: ':checked',
            desc: "Radio and checkbox elements can be toggled by the user. Some menu items are 'checked' when the user selects them. When such elements are toggled 'on' the :checked pseudo-class applies."
        },
        {
            name: ':corner-present',
            desc: 'Non-standard. Indicates whether or not a scrollbar corner is present.'
        },
        {
            name: ':decrement',
            desc: 'Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will decrement the view’s position when used.'
        },
        {
            name: ':default',
            desc: 'Applies to the one or more UI elements that are the default among a set of similar elements. Typically applies to context menu items, buttons, and select lists/menus.'
        },
        {
            name: ':disabled',
            desc: 'Represents user interface elements that are in a disabled state; such elements have a corresponding enabled state.'
        },
        {
            name: ':double-button',
            desc: 'Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed together at the same end of the scrollbar.'
        },
        {
            name: ':empty',
            desc: 'Represents an element that has no children at all.'
        },
        {
            name: ':enabled',
            desc: 'Represents user interface elements that are in an enabled state; such elements have a corresponding disabled state.'
        },
        {
            name: ':end',
            desc: 'Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed after the thumb.'
        },
        {
            name: ':first',
            desc: 'When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.'
        },
        {
            name: ':first-child',
            desc: 'Same as :nth-child(1). Represents an element that is the first child of some other element.'
        },
        {
            name: ':first-of-type',
            desc: 'Same as :nth-of-type(1). Represents an element that is the first sibling of its type in the list of children of its parent element.'
        },
        {
            name: ':focus',
            desc: 'Applies while an element has the focus (accepts keyboard or mouse events, or other forms of input).'
        },
        {
            name: ':fullscreen',
            desc: 'Matches any element that has its fullscreen flag set.'
        },
        {
            name: ':future',
            desc: 'Represents any element that is defined to occur entirely after a :current element.'
        },
        {
            name: ':horizontal',
            desc: 'Non-standard. Applies to any scrollbar pieces that have a horizontal orientation.'
        },
        {
            name: ':host',
            desc: 'When evaluated in the context of a shadow tree, matches the shadow tree’s host element.'
        },
        {
            name: ':host()',
            desc: 'When evaluated in the context of a shadow tree, it matches the shadow tree’s host element if the host element, in its normal context, matches the selector argument.'
        },
        {
            name: ':host-context()',
            desc: 'Tests whether there is an ancestor, outside the shadow tree, which matches a particular selector.'
        },
        {
            name: ':hover',
            desc: 'Applies while the user designates an element with a pointing device, but does not necessarily activate it. For example, a visual user agent could apply this pseudo-class when the cursor (mouse pointer) hovers over a box generated by the element.'
        },
        {
            name: ':increment',
            desc: 'Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will increment the view’s position when used.'
        },
        {
            name: ':indeterminate',
            desc: 'Applies to UI elements whose value is in an indeterminate state.'
        },
        {
            name: ':in-range',
            desc: 'Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes.'
        },
        {
            name: ':invalid',
            desc: 'An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification.'
        },
        {
            name: ':lang()',
            desc: 'Represents an element that is in language specified.'
        },
        {
            name: ':last-child',
            desc: 'Same as :nth-last-child(1). Represents an element that is the last child of some other element.'
        },
        {
            name: ':last-of-type',
            desc: 'Same as :nth-last-of-type(1). Represents an element that is the last sibling of its type in the list of children of its parent element.'
        },
        {
            name: ':left',
            desc: 'When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.'
        },
        {
            name: ':link',
            desc: 'Applies to links that have not yet been visited.'
        },
        {
            name: ':matches()',
            desc: 'Takes a selector list as its argument. It represents an element that is represented by its argument.'
        },
        {
            name: ':-moz-any()',
            desc: 'Represents an element that is represented by the selector list passed as its argument. Standardized as :matches().'
        },
        {
            name: ':-moz-any-link',
            desc: 'Represents an element that acts as the source anchor of a hyperlink. Applies to both visited and unvisited links.'
        },
        {
            name: ':-moz-broken',
            desc: 'Non-standard. Matches elements representing broken images.'
        },
        {
            name: ':-moz-drag-over',
            desc: 'Non-standard. Matches elements when a drag-over event applies to it.'
        },
        {
            name: ':-moz-first-node',
            desc: 'Non-standard. Represents an element that is the first child node of some other element.'
        },
        {
            name: ':-moz-focusring',
            desc: 'Non-standard. Matches an element that has focus and focus ring drawing is enabled in the browser.'
        },
        {
            name: ':-moz-full-screen',
            desc: 'Matches any element that has its fullscreen flag set. Standardized as :fullscreen.'
        },
        {
            name: ':-moz-last-node',
            desc: 'Non-standard. Represents an element that is the last child node of some other element.'
        },
        {
            name: ':-moz-loading',
            desc: 'Non-standard. Matches elements, such as images, that haven’t started loading yet.'
        },
        {
            name: ':-moz-only-whitespace',
            desc: 'The same as :empty, except that it additionally matches elements that only contain code points affected by whitespace processing. Standardized as :blank.'
        },
        {
            name: ':-moz-placeholder',
            desc: 'Deprecated. Represents placeholder text in an input field. Use ::-moz-placeholder for Firefox 19+.'
        },
        {
            name: ':-moz-submit-invalid',
            desc: 'Non-standard. Represents any submit button when the contents of the associated form are not valid.'
        },
        {
            name: ':-moz-suppressed',
            desc: 'Non-standard. Matches elements representing images that have been blocked from loading.'
        },
        {
            name: ':-moz-ui-invalid',
            desc: "Non-standard. Represents any validated form element whose value isn't valid "
        },
        {
            name: ':-moz-ui-valid',
            desc: 'Non-standard. Represents any validated form element whose value is valid '
        },
        {
            name: ':-moz-user-disabled',
            desc: 'Non-standard. Matches elements representing images that have been disabled due to the user’s preferences.'
        },
        {
            name: ':-moz-window-inactive',
            desc: 'Non-standard. Matches elements in an inactive window.'
        },
        {
            name: ':-ms-fullscreen',
            desc: 'Matches any element that has its fullscreen flag set.'
        },
        {
            name: ':-ms-input-placeholder',
            desc: 'Represents placeholder text in an input field. Note: for Edge use the pseudo-element ::-ms-input-placeholder. Standardized as ::placeholder.'
        },
        {
            name: ':-ms-keyboard-active',
            desc: 'Windows Store apps only. Applies one or more styles to an element when it has focus and the user presses the space bar.'
        },
        {
            name: ':-ms-lang()',
            desc: 'Represents an element that is in the language specified. Accepts a comma separated list of language tokens.'
        },
        {
            name: ':no-button',
            desc: 'Non-standard. Applies to track pieces. Applies when there is no button at that end of the track.'
        },
        {
            name: ':not()',
            desc: 'The negation pseudo-class, :not(X), is a functional notation taking a simple selector (excluding the negation pseudo-class itself) as an argument. It represents an element that is not represented by its argument.'
        },
        {
            name: ':nth-child()',
            desc: 'Represents an element that has an+b-1 siblings before it in the document tree, for any positive integer or zero value of n, and has a parent element.'
        },
        {
            name: ':nth-last-child()',
            desc: 'Represents an element that has an+b-1 siblings after it in the document tree, for any positive integer or zero value of n, and has a parent element.'
        },
        {
            name: ':nth-last-of-type()',
            desc: 'Represents an element that has an+b-1 siblings with the same expanded element name after it in the document tree, for any zero or positive integer value of n, and has a parent element.'
        },
        {
            name: ':nth-of-type()',
            desc: 'Represents an element that has an+b-1 siblings with the same expanded element name before it in the document tree, for any zero or positive integer value of n, and has a parent element.'
        },
        {
            name: ':only-child',
            desc: 'Represents an element that has a parent element and whose parent element has no other element children. Same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity.'
        },
        {
            name: ':only-of-type',
            desc: 'Matches every element that is the only child of its type, of its parent. Same as :first-of-type:last-of-type or :nth-of-type(1):nth-last-of-type(1), but with a lower specificity.'
        },
        {
            name: ':optional',
            desc: 'A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional.'
        },
        {
            name: ':out-of-range',
            desc: 'Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes.'
        },
        {
            name: ':past',
            desc: 'Represents any element that is defined to occur entirely prior to a :current element.'
        },
        {
            name: ':read-only',
            desc: 'An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only.'
        },
        {
            name: ':read-write',
            desc: 'An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only.'
        },
        {
            name: ':required',
            desc: 'A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional.'
        },
        {
            name: ':right',
            desc: 'When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.'
        },
        {
            name: ':root',
            desc: 'Represents an element that is the root of the document. In HTML 4, this is always the HTML element.'
        },
        {
            name: ':scope',
            desc: 'Represents any element that is in the contextual reference element set.'
        },
        {
            name: ':single-button',
            desc: 'Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed separately at either end of the scrollbar.'
        },
        {
            name: ':start',
            desc: 'Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed before the thumb.'
        },
        {
            name: ':target',
            desc: "Some URIs refer to a location within a resource. This kind of URI ends with a 'number sign' (#) followed by an anchor identifier (called the fragment identifier)."
        },
        {
            name: ':valid',
            desc: 'An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification.'
        },
        {
            name: ':vertical',
            desc: 'Non-standard. Applies to any scrollbar pieces that have a vertical orientation.'
        },
        {
            name: ':visited',
            desc: 'Applies once the link has been visited by the user.'
        },
        {
            name: ':-webkit-any()',
            desc: 'Represents an element that is represented by the selector list passed as its argument. Standardized as :matches().'
        },
        {
            name: ':-webkit-full-screen',
            desc: 'Matches any element that has its fullscreen flag set. Standardized as :fullscreen.'
        },
        {
            name: ':window-inactive',
            desc: 'Non-standard. Applies to all scrollbar pieces. Indicates whether or not the window containing the scrollbar is currently active.'
        }
    ],
    pseudoelements: [
        {
            name: '::after',
            desc: 'Represents a styleable child pseudo-element immediately after the originating element’s actual content.'
        },
        {
            name: '::backdrop',
            desc: 'Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen).'
        },
        {
            name: '::before',
            desc: 'Represents a styleable child pseudo-element immediately before the originating element’s actual content.'
        },
        {
            name: '::content',
            desc: 'Deprecated. Matches the distribution list itself, on elements that have one. Use ::slotted for forward compatibility.'
        },
        {
            name: '::cue'
        },
        {
            name: '::cue()'
        },
        {
            name: '::cue-region'
        },
        {
            name: '::cue-region()'
        },
        {
            name: '::first-letter',
            desc: 'Represents the first letter of an element, if it is not preceded by any other content (such as images or inline tables) on its line.'
        },
        {
            name: '::first-line',
            desc: 'Describes the contents of the first formatted line of its originating element.'
        },
        {
            name: '::-moz-focus-inner'
        },
        {
            name: '::-moz-focus-outer'
        },
        {
            name: '::-moz-list-bullet',
            desc: 'Used to style the bullet of a list element. Similar to the standardized ::marker.'
        },
        {
            name: '::-moz-list-number',
            desc: 'Used to style the numbers of a list element. Similar to the standardized ::marker.'
        },
        {
            name: '::-moz-placeholder',
            desc: 'Represents placeholder text in an input field'
        },
        {
            name: '::-moz-progress-bar',
            desc: 'Represents the bar portion of a progress bar.'
        },
        {
            name: '::-moz-selection',
            desc: 'Represents the portion of a document that has been highlighted by the user.'
        },
        {
            name: '::-ms-backdrop',
            desc: 'Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen).'
        },
        {
            name: '::-ms-browse',
            desc: 'Represents the browse button of an input type=file control.'
        },
        {
            name: '::-ms-check',
            desc: 'Represents the check of a checkbox or radio button input control.'
        },
        {
            name: '::-ms-clear',
            desc: 'Represents the clear button of a text input control'
        },
        {
            name: '::-ms-expand',
            desc: 'Represents the drop-down button of a select control.'
        },
        {
            name: '::-ms-fill',
            desc: 'Represents the bar portion of a progress bar.'
        },
        {
            name: '::-ms-fill-lower',
            desc: 'Represents the portion of the slider track from its smallest value up to the value currently selected by the thumb. In a left-to-right layout, this is the portion of the slider track to the left of the thumb.'
        },
        {
            name: '::-ms-fill-upper',
            desc: "Represents the portion of the slider track from the value currently selected by the thumb up to the slider's largest value. In a left-to-right layout, this is the portion of the slider track to the right of the thumb."
        },
        {
            name: '::-ms-reveal',
            desc: 'Represents the password reveal button of an input type=password control.'
        },
        {
            name: '::-ms-thumb',
            desc: 'Represents the portion of range input control (also known as a slider control) that the user drags.'
        },
        {
            name: '::-ms-ticks-after',
            desc: "Represents the tick marks of a slider that begin just after the thumb and continue up to the slider's largest value. In a left-to-right layout, these are the ticks to the right of the thumb."
        },
        {
            name: '::-ms-ticks-before',
            desc: 'Represents the tick marks of a slider that represent its smallest values up to the value currently selected by the thumb. In a left-to-right layout, these are the ticks to the left of the thumb.'
        },
        {
            name: '::-ms-tooltip',
            desc: 'Represents the tooltip of a slider (input type=range).'
        },
        {
            name: '::-ms-track',
            desc: 'Represents the track of a slider.'
        },
        {
            name: '::-ms-value',
            desc: 'Represents the content of a text or password input control, or a select control.'
        },
        {
            name: '::selection',
            desc: 'Represents the portion of a document that has been highlighted by the user.'
        },
        {
            name: '::shadow',
            desc: 'Matches the shadow root if an element has a shadow tree.'
        },
        {
            name: '::-webkit-file-upload-button'
        },
        {
            name: '::-webkit-inner-spin-button'
        },
        {
            name: '::-webkit-input-placeholder'
        },
        {
            name: '::-webkit-keygen-select'
        },
        {
            name: '::-webkit-meter-bar'
        },
        {
            name: '::-webkit-meter-even-less-good-value'
        },
        {
            name: '::-webkit-meter-optimum-value'
        },
        {
            name: '::-webkit-meter-suboptimal-value'
        },
        {
            name: '::-webkit-outer-spin-button'
        },
        {
            name: '::-webkit-progress-bar'
        },
        {
            name: '::-webkit-progress-inner-element'
        },
        {
            name: '::-webkit-progress-value'
        },
        {
            name: '::-webkit-resizer'
        },
        {
            name: '::-webkit-scrollbar'
        },
        {
            name: '::-webkit-scrollbar-button'
        },
        {
            name: '::-webkit-scrollbar-corner'
        },
        {
            name: '::-webkit-scrollbar-thumb'
        },
        {
            name: '::-webkit-scrollbar-track'
        },
        {
            name: '::-webkit-scrollbar-track-piece'
        },
        {
            name: '::-webkit-search-cancel-button'
        },
        {
            name: '::-webkit-search-decoration'
        },
        {
            name: '::-webkit-search-results-button'
        },
        {
            name: '::-webkit-search-results-decoration'
        },
        {
            name: '::-webkit-slider-runnable-track'
        },
        {
            name: '::-webkit-slider-thumb'
        },
        {
            name: '::-webkit-textfield-decoration-container'
        },
        {
            name: '::-webkit-validation-bubble'
        },
        {
            name: '::-webkit-validation-bubble-arrow'
        },
        {
            name: '::-webkit-validation-bubble-arrow-clipper'
        },
        {
            name: '::-webkit-validation-bubble-heading'
        },
        {
            name: '::-webkit-validation-bubble-message'
        },
        {
            name: '::-webkit-validation-bubble-text-block'
        }
    ]
};
exports.Pseudo = [
    {
        name: ':active',
        body: ':active',
        desc: 'Applies while an element is being activated by the user. For example, between the times the user presses the mouse button and releases it.'
    },
    {
        name: ':any-link',
        body: ':any-link',
        desc: 'Represents an element that acts as the source anchor of a hyperlink. Applies to both visited and unvisited links.'
    },
    {
        name: ':checked',
        body: ':checked',
        desc: "Radio and checkbox elements can be toggled by the user. Some menu items are 'checked' when the user selects them. When such elements are toggled 'on' the :checked pseudo-class applies."
    },
    {
        name: ':corner-present',
        body: ':corner-present',
        desc: 'Non-standard. Indicates whether or not a scrollbar corner is present.'
    },
    {
        name: ':decrement',
        body: ':decrement',
        desc: 'Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will decrement the view’s position when used.'
    },
    {
        name: ':default',
        body: ':default',
        desc: 'Applies to the one or more UI elements that are the default among a set of similar elements. Typically applies to context menu items, buttons, and select lists/menus.'
    },
    {
        name: ':disabled',
        body: ':disabled',
        desc: 'Represents user interface elements that are in a disabled state; such elements have a corresponding enabled state.'
    },
    {
        name: ':double-button',
        body: ':double-button',
        desc: 'Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed together at the same end of the scrollbar.'
    },
    {
        name: ':empty',
        body: ':empty',
        desc: 'Represents an element that has no children at all.'
    },
    {
        name: ':enabled',
        body: ':enabled',
        desc: 'Represents user interface elements that are in an enabled state; such elements have a corresponding disabled state.'
    },
    {
        name: ':end',
        body: ':end',
        desc: 'Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed after the thumb.'
    },
    {
        name: ':first',
        body: ':first',
        desc: 'When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.'
    },
    {
        name: ':first-child',
        body: ':first-child',
        desc: 'Same as :nth-child(1). Represents an element that is the first child of some other element.'
    },
    {
        name: ':first-of-type',
        body: ':first-of-type',
        desc: 'Same as :nth-of-type(1). Represents an element that is the first sibling of its type in the list of children of its parent element.'
    },
    {
        name: ':focus',
        body: ':focus',
        desc: 'Applies while an element has the focus (accepts keyboard or mouse events, or other forms of input).'
    },
    {
        name: ':fullscreen',
        body: ':fullscreen',
        desc: 'Matches any element that has its fullscreen flag set.'
    },
    {
        name: ':future',
        body: ':future',
        desc: 'Represents any element that is defined to occur entirely after a :current element.'
    },
    {
        name: ':horizontal',
        body: ':horizontal',
        desc: 'Non-standard. Applies to any scrollbar pieces that have a horizontal orientation.'
    },
    {
        name: ':host',
        body: ':host',
        desc: 'When evaluated in the context of a shadow tree, matches the shadow tree’s host element.'
    },
    {
        name: ':host()',
        body: ':host($1)',
        desc: 'When evaluated in the context of a shadow tree, it matches the shadow tree’s host element if the host element, in its normal context, matches the selector argument.'
    },
    {
        name: ':host-context()',
        body: ':host-context($1)',
        desc: 'Tests whether there is an ancestor, outside the shadow tree, which matches a particular selector.'
    },
    {
        name: ':hover',
        body: ':hover',
        desc: 'Applies while the user designates an element with a pointing device, but does not necessarily activate it. For example, a visual user agent could apply this pseudo-class when the cursor (mouse pointer) hovers over a box generated by the element.'
    },
    {
        name: ':increment',
        body: ':increment',
        desc: 'Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will increment the view’s position when used.'
    },
    {
        name: ':indeterminate',
        body: ':indeterminate',
        desc: 'Applies to UI elements whose value is in an indeterminate state.'
    },
    {
        name: ':in-range',
        body: ':in-range',
        desc: 'Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes.'
    },
    {
        name: ':invalid',
        body: ':invalid',
        desc: 'An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification.'
    },
    {
        name: ':lang()',
        body: ':lang($1)',
        desc: 'Represents an element that is in language specified.'
    },
    {
        name: ':last-child',
        body: ':last-child',
        desc: 'Same as :nth-last-child(1). Represents an element that is the last child of some other element.'
    },
    {
        name: ':last-of-type',
        body: ':last-of-type',
        desc: 'Same as :nth-last-of-type(1). Represents an element that is the last sibling of its type in the list of children of its parent element.'
    },
    {
        name: ':left',
        body: ':left',
        desc: 'When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.'
    },
    {
        name: ':link',
        body: ':link',
        desc: 'Applies to links that have not yet been visited.'
    },
    {
        name: ':no-button',
        body: ':no-button',
        desc: 'Non-standard. Applies to track pieces. Applies when there is no button at that end of the track.'
    },
    {
        name: ':not()',
        body: ':not($1)',
        desc: 'The negation pseudo-class, :not(X), is a functional notation taking a simple selector (excluding the negation pseudo-class itself) as an argument. It represents an element that is not represented by its argument.'
    },
    {
        name: ':nth-child()',
        body: ':nth-child($1)',
        desc: 'Represents an element that has an+b-1 siblings before it in the document tree, for any positive integer or zero value of n, and has a parent element.'
    },
    {
        name: ':nth-last-child()',
        body: ':nth-last-child($1)',
        desc: 'Represents an element that has an+b-1 siblings after it in the document tree, for any positive integer or zero value of n, and has a parent element.'
    },
    {
        name: ':nth-last-of-type()',
        body: ':nth-last-of-type($1)',
        desc: 'Represents an element that has an+b-1 siblings with the same expanded element name after it in the document tree, for any zero or positive integer value of n, and has a parent element.'
    },
    {
        name: ':nth-of-type()',
        body: ':nth-of-type($1)',
        desc: 'Represents an element that has an+b-1 siblings with the same expanded element name before it in the document tree, for any zero or positive integer value of n, and has a parent element.'
    },
    {
        name: ':only-child',
        body: ':only-child',
        desc: 'Represents an element that has a parent element and whose parent element has no other element children. Same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity.'
    },
    {
        name: ':only-of-type',
        body: ':only-of-type',
        desc: 'Matches every element that is the only child of its type, of its parent. Same as :first-of-type:last-of-type or :nth-of-type(1):nth-last-of-type(1), but with a lower specificity.'
    },
    {
        name: ':optional',
        body: ':optional',
        desc: 'A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional.'
    },
    {
        name: ':out-of-range',
        body: ':out-of-range',
        desc: 'Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes.'
    },
    {
        name: ':past',
        body: ':past',
        desc: 'Represents any element that is defined to occur entirely prior to a :current element.'
    },
    {
        name: ':read-only',
        body: ':read-only',
        desc: 'An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only.'
    },
    {
        name: ':read-write',
        body: ':read-write',
        desc: 'An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only.'
    },
    {
        name: ':required',
        body: ':required',
        desc: 'A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional.'
    },
    {
        name: ':right',
        body: ':right',
        desc: 'When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.'
    },
    {
        name: ':root',
        body: ':root',
        desc: 'Represents an element that is the root of the document. In HTML 4, this is always the HTML element.'
    },
    {
        name: ':scope',
        body: ':scope',
        desc: 'Represents any element that is in the contextual reference element set.'
    },
    {
        name: ':single-button',
        body: ':single-button',
        desc: 'Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed separately at either end of the scrollbar.'
    },
    {
        name: ':start',
        body: ':start',
        desc: 'Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed before the thumb.'
    },
    {
        name: ':target',
        body: ':target',
        desc: "Some URIs refer to a location within a resource. This kind of URI ends with a 'number sign' (#) followed by an anchor identifier (called the fragment identifier)."
    },
    {
        name: ':valid',
        body: ':valid',
        desc: 'An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification.'
    },
    {
        name: ':vertical',
        body: ':vertical',
        desc: 'Non-standard. Applies to any scrollbar pieces that have a vertical orientation.'
    },
    {
        name: ':visited',
        body: ':visited',
        desc: 'Applies once the link has been visited by the user.'
    },
    {
        name: '::after',
        body: '::after',
        desc: 'Represents a styleable child pseudo-element immediately after the originating element’s actual content.'
    },
    {
        name: '::backdrop',
        body: '::backdrop',
        desc: 'Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen).'
    },
    {
        name: '::before',
        body: '::before',
        desc: 'Represents a styleable child pseudo-element immediately before the originating element’s actual content.'
    },
    {
        name: '::selection',
        body: '::selection',
        desc: 'Represents the portion of a document that has been highlighted by the user.'
    },
    {
        name: '::shadow',
        body: '::shadow',
        desc: 'Matches the shadow root if an element has a shadow tree.'
    },
    {
        name: '::first-letter',
        body: '::first-letter',
        desc: 'Represents the first letter of an element, if it is not preceded by any other content (such as images or inline tables) on its line.'
    },
    {
        name: '::first-line',
        body: '::first-line',
        desc: 'Describes the contents of the first formatted line of its originating element.'
    }
];
exports.sassPseudo = (andStared) => {
    if (!andStared) {
        andStared = [];
    }
    const pseudo = exports.Pseudo.map(item => {
        const completionItem = new vscode_1.CompletionItem(`${andStared.indexOf(item.name.replace(/:*\(*\)*/g, '')) !== -1 ? '*' : ''}${item.name}`);
        completionItem.insertText = new vscode_1.SnippetString(`${item.body}\n\t$0`);
        completionItem.detail = item.desc;
        completionItem.kind = vscode_1.CompletionItemKind.Class;
        return completionItem;
    });
    return pseudo;
};
//# sourceMappingURL=autocomplete.pseudo.js.map