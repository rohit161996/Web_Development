## JQuery

#### 1. The way to get the element by ID is:- 
- $("#id");

#### 2. The way to call the function on ID selection:-
- $("#id").function(){}

  or

- $(".class").function();

e.g. dblclick(()=>{

                  });

e.g. click(()=>{

          });

#### 3. The way to get the value of element:-
parseInt($(".class").val());

#### 4. Button Functions :-
- $("#button").click(function(){});
- $("#button").click(()=>{});
  
#### 5. Paragraph Functions :-
- $("#paragraph").toggle();

#### 6. Execute JQuery after loading the page.
- $(document).ready(function () {});

#### 7. Change the attribute of the image:-
- $("#id").attr("attribute_name", "value_of_the_attribute");
- $(".class").attr("attribute_name", "value_of_the_attribute");
  
##### 8. E.g. For the Image
- $("#id").attr("height", "300px");

#### 9. Add CSS to a DOM element
- $("tag").css("padding","20px");
- $("#id").css({"color":"red","background-color":"yellow","padding":"20px"});
- $(".class").addClass("class_name");

#### 10. Change the text of the para, h1, h2 etc.
- $("#id").text("I am Learning JQUERY");

## 11. Effects :- 
### 1. Animate in JQuery
- $("#id").animate({CSS_PROPERTIES},TRANSITION_TIME);});

- CSS_PROPERTIES : left:'250px',top:'100px',
- TRANSITION_TIME : 2000, or fast or slow in milliseconds

### 2. Fade in JQuery
- $("tag").fadeIn(TRANSITION_TIME);
- $("tag").fadeOut(TRANSITION_TIME);
- TRANSITION_TIME : 2000, or fast or slow in milliseconds

### 3. Hide/Show in JQuery
- $("div").hide(TRANSITION_TIME);
- $("div").show(TRANSITION_TIME);
- TRANSITION_TIME : 2000, or fast or slow in milliseconds

### 4. Slide in JQuery
- $("#id").slideUp(TRANSITION_TIME);
- TRANSITION_TIME : 2000, or fast or slow in milliseconds

- $("#dd").slideUp(TRANSITION_TIME, () => {
                    alert("Slide Up Completed");
                });

### 5. this Keyword
- $(this).hide();
  or
- $(this).show();

### 6. Focus
- $("input").focus(function () {});
- When an element is clicked into.

### 7. Blur
- $("input").blur(function () {});
- When an element is clicked out of.

### 8. Hover
- $("h1").hover();
- When the cursor points to the element.
- Apply transition to the css.

### 9. Mouse Enter
- $("h1").mouseenter(function () {});
- $("h1").mouseenter(() => {
      $(this).css({
          "font-weight": "normal",
          "color": "red"
      });
  });

### 10. Mouse Leaving
- $("h1").mouseleave(function () {});

- $("h1").mouseleave(function () {
      $(this).css({
          "font-weight": "bold",
          "color": "blue"
      });
  });

### 11. on Event
- $("input").on({});


