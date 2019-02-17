# CSS Notes

A collection of notes on CSS that occur to me to be useful as I make my way through Free Code Camp's lessons.

## CSS Property - 'Position'

Values: static, relative, absolute, fixed, sticky

* Static
  * the default value, the all html elements are still follow the 'page flow'. The top, right, bottom, left and z-index properties have no effect.
* Relative
  * The element is positioned according to the normal flow of the document, and then offset __relative to itself__ based on the values of top, right, bottom, and left. The offset does not affect the position of any othe relements; thus, the space given for the element in the page layout is the same as if position were static.
  * This value creates a new __stacking context__ when the value of the z-index is not auto.
* Absolute
  * The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to its closet positioned ancecstor, if any; otherwise, it is placed relative to the intia containing block. Its final position is determined by the values of __top__, __right__, __bottom__, and __left__.
  * This value creates a new stacking context when the value of z-index is not auto.

## HSL()

hsl( int, percent, percent ) is another way to define a color using css. The integer represents a single pure color. The first percentage is how much black or white is added to the color 50% is the default. The last percentage is how much gray is added to the color.

## Psudo Selectors ::before() and ::after()

The psudo-elements ::before() and ::after are used to add something before or after a selected element.

## Applied Accesibility

1) Have well-organized code that uses appropriate markup.
2) Ensure text alternatives exist for non-text and visual content.
3) create an easiy-navigated page that's keyboard-friendly.

### The img alt attribute

Make sure to add an alt attribute to all your image tags, even if the alt description will just be an empty string. The text in the alt attribute will be used by screen readers and web crawlers. The cult of accessibility has spoken, dare not tresspass.

### Headings

The different heading tags are used to provide structure and labeling to your content. Screen readers can be set to read only the headings on a page so the user gets a summary. So it's important to use headings in a way that has semantic meaning. Use them to establish a heirarchy to the different sections and sub-sections of your content.

Use the headings for their semantics, not for their default size. We can change the size with css to match our desired text size. A few simple rules:

1) There should only be one &lt;h1&gt; tag on the page, which describes the content.
2) There can be multiple higher tags h2, h3, h4, h5, h6 but they must increase in value based on their 'parent'.
3) Meaning, that if an h2 has any child headings they must be an h3. And if those h3 headings have any child headings of their own, then they would be an h4.

### Semantic content Tags

These tags behave the same as a div, but they add some semantic meaning to the content.

#### Main

The main element is used to wrap the main content, and there should only be one per page. It's meant to wrap the information that is related to the central topic of your page. It should not include items that repeat across pages, like __navigation links__ or __banners__.

#### Article

An __&lt;article&gt;__ is a sectioning element, and is used to wrap independent, self-contained content. The tag works well with blog entries, forum posts or news articles. When trying to decide if the content should be wrapped in an article, ask yourself: _"If all the surrounding context were removed would the content sill make sense?"_. If there is no relationship between groups of content, then use a &lt;div&gt;

| Tag     | Usecase |
| ---     | ---     |
| div     | groups content |
| section | groups related content |
| article | groups independent, self-contained content |

#### Header

The header tag is used to wrap introductory information or navigation links for its parent tag, and work well around content that's repeated at the top on multiple pages. If your header element only contains a single heading element leave out the header. The article or section will ensure be shown in the document outline.

#### Nav

The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links. Not all gorups of links on a page need to be in a nav, the element is primarily intended for sections that consist of __major navigation blocks__. A footer for instance would not need a nav tag to group links to other pages, but the main navigation in the header would.

#### Figure

The figure element represents self-contained content, frequently with a caption (figcaption), and is typically referenced as a single unit.

Usually a figure is an image, illustration, diagram, code snippet, etc., that is referenced in the main flow of a document, but that can be moved to another part of the document or to an appendix without affecting the main flow.

#### Label

The label tag wraps the text for a specific form control item, usually the name or labe for a choice. This ties meaning to the item and makes the form more readable. The 'for' attribute on a label tag explicitly associates the label with the form control and is used by screen readers.

#### Fieldset & Legend

The fieldset element is used to wrap a group of radio buttons together. There is often a legend tag to provide a description for the goruping, which is read by screen readers for each choice in the fieldset element.

The fieldset wrapper and legend tag are not necessar whey the choices are self-explanitory, like a gender selection. using a label with the for attribute for each radio button is sufficient.

#### Time

The time element is used to wrap textual descriptions of a date when used in conjunction with the 'datetime' attribute.

```html

<p>Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat tournament is <time datetime="2016-09-15">Thursday, September 15<sup>th</sup></time>. May the best ninja win!</p>

```

#### Hiding content meant for screen readers

If we have some visual information that is important to the content but in a format that is not amenible to being parsed by a screen reader, we can hide it using css. One technique is to position the element way way way offscreen like so.

```css
/*
css class that hides content from view, but
can still be processed by screen readers.
*/
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}

```

If we set the element to have a visibility of 'none' or 'hidden' then it will be ignored by the screen reader. The same goes for if we give the element a width or height of less than 1px.

#### High Contrast text

text to background should have a value of at least 4.5:1. Black text on a white background has a contrast of 21:1. Use a site such as [WebAIM](https://webaim.org/resources/contrastchecker/) to check the contrast of your colors.

#### Adding meaning to anchor tags

Screen readers have an option to only hear the links available on a page, this is useful for establishing all the different areas a page can lead you. This feature is not very helpful however if the text describing the anchor tag is not descriptive. Simply use as descriptive text for anchor tags where possible.

#### Making links navigatable with HTML access keys

FreeCodeCamp says: "HTML offers the accesskey attribute to specify a shortcut key to activate or bring focus to an element. This can make navigation more efficient for keyboard-only users.

HTML5 allows this attribute to be used on any element, but it's particularly useful when it's used with interactive ones. This includes links, buttons, and form controls."

But MDN says: __Just avoid using access keys due to poor browser support and the problem of conflicting with browser keys.__

#### Tabindex

The HTML tabindex attribute has three distinct functions relating to an element's keyboard focus. When it's on a tag, it indicates that element can be focused on. The value (an integer that's positive, negative, or zero) determines the behavior.

Certain elements, such as links and form controls, automatically receive keyboard focus when a user tabs through a page. It's in the same order as the elements come in the HTML source markup. This same functionality can be given to other elements, such as div, span, and p, by placing a tabindex="0" attribute on them.

The tabindex attribute accepts an integer as string value: "0", "1", "2", etc. By specifingy a tabindex on an element you will override the default tab order of your document.

### Flexbox

Use flex box flor laying out content along a single axis. CSS Grid should be used for describing the broad shape of a page, flex containers will lay out content within each area described by grid.

#### Flex Container properties

This isn't comprehensive, but includes the properties I find most useful.

* __justify-content__
  * This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.
  * Use this for property for setting how content will be spaced along a __single axis__ or __line__.
  * The multi-line counter part to __justify-content__ is the __align-content__ property.
* __align-items__
  * This defines the default behavior for how flex items are laid out along the cross-axis on the current line. This is the __justify-content__ version for the cross-axis.
  * In other words, this will shift the content vertically if the flex-direction is set to row, or horizontally if the flex-direction is set to column.
* __align-content__
  * This aligns a flex container's lines within, when there is extra space in the cross-axis, similar to how __justify-content__ _aligns individual items within the main-axis_.
  * Use this attribute for positioning multiple lines of wrapped flex items within a flex container. It will have no effect on a single line of flex items.

#### Flex Item propoerties

This isn't comprehensive, but includes the properties I find most useful.

* __order__
  * This property allows you to set the order that the item will be laid out. By default the order is based on the source order.
  * Accepts whole numbers + or -.
* __flex-grow__
  * This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of available space inside the flex container the item should take up.
  * If all items have a flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others. Or at the very least try to.
* __flex-shrink__
  * This defines the ability for a flex item to shrink if necessary.
  * Only accepts positive numbers greater than zero.
* __flex-basis__
  * This defines the default size of an element before the remaining space is distributed. It can be a length, or a keyword. The 'auto' keyword means: look at my width or height property".
  * If set to 0, the extra space around content isn't factored in. If set to 'auto', the extra space is distributed based on its 'flex-grow' value.
* __align-self__
  * This allows the inherited alignment to be overriden for indivdual flex items.

### CSS Grid

A grid can be subdivided into many sections. These sections are called __columns__ if they travel vertically and __rows__ if they travel horizontally. We can define how much space each item takes up using various compatible grid units.

A grid will lay out its content from left to right, top to bottom. It is possible to nest grids inside other grids, inside other grids, and so on.

#### Grid Units

CSS Grid can accept many common units such as __px__ and __em__ but also:

* __fr__: Sets the column or row to a fraction of the available space.
* __auto__: sets the column or row to the width or height of its content.
* __%__: adjust the column or row to the percent width of its container.

#### Grid functions

* __repeat( n, ...args)__
  * use as an argument to a css grid property the args, repeated n number of times. Where n is the number of desired repititions.
  * __auto-fill__: When auto-fill is used as an argument for repeat, repeat will continue based on the size of the container.
  * __auto-fit__: Similar to auto-fill. The only difference is that when the container's size exceeds the size of all the items cobined, auto-fill keeps inserting empty rows or columns and stretches your items to fit the size of the container. If the container can't fit all your items on one row, it will move them down to a new one. This will not grow, an individual cell to take up free space. Each cell remains a uniform size.
* __minmax( min, max)__
  * uses as a value to a grid property a minimum and a maximum value to control how the grid cell will grow and shrink.