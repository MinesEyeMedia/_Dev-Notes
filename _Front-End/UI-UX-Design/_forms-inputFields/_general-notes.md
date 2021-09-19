# Forms & Inputs
### General Concepts & Notes


When designing and styling forms it's important to adhere to the general principals for good UI/UX design such as:

- White Space
- Color
- Contrast
- Scale
- Alignment
- Typography
- Visual Hierarchy

### Do's and Don't-Do's Regarding Forms/Inputs:

1) Don't omit proper form labels and just use 'placeholder' values as the form labels.  
This is bad practice for a number of reasons, firstly it's just 'poor' UX because some users forget what has to be put into the field after they select it and then have to de-select the field to once again find out what it requires, which is just 'clunky'.  
Also, in terms of A11y compliance, many users using screen readers just will not get the proper 'readout' from their voice software for 'placeholder' values, which obviously makes them completely useless.

1) Avoid unnecessarily long forms. If we need to collect a 'larger' amount of information, it's not only best to, but also becoming common practice to 'break up' the form into 'sub-forms/sections/pages' using something like a progress bar, etc., to break up the steps in the input process.  
Research shows that if a user is presented with a ton of form fields on a single page the user is significantly less likely to actually complete that form in general and if they do, they'll most likely only fill in the 'required' fields, which kind of kills the point of asking for all the other information anyway.

2) Inline Form Validation should __always__ be the default without exception unless a client insists on otherwise for *some* reason, and if that's the case then they should be educated on the UX reasons for INLINE validation.  
What this means is simply that when a form field is left blank that might be required, or if improper data patterns, or information is entered, the user should be notified immediately upon either entering the info in that field, or when un-focusing that input field; and the user should be presented with an error notification DIRECTLY ON OR AT THE INPUT FIELD.  

* _Do not put all form validation errors at the top or bottom of a form or page and ideally (and very easily doable) do not wait until the user attempts to progress or submit the form to validate their information! As mentioned above, validate at the time of user input or on field/element un-focus._
