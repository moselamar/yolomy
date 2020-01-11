//parent element for the products category
var parent = document.getElementById("products")

// get the checkbox for both men and women category
var checkboxMen =document.getElementById("checkbox1");
var checkboxWomen =document.getElementById("checkbox2");
var checkboxChildren = document.getElementById("checkbox3")


//getting both the categories
var men = document.getElementById("men");
var women = document.getElementById("women");
var children = document.getElementById("children")



let checkbox_array =[checkboxMen,checkboxWomen,checkboxChildren]

for(var i = 0; i<checkbox_array.length;i++)
{
    checkbox_array[i].addEventListener("change", function()
    {
        if(this == checkboxMen)
        {
            if(document.getElementById(this.id).checked == false)
            {
                remove(men,this.id)
            }
            else
            {
                add(men,this.id)
            }
          
        }
        else if(this == checkboxWomen)
        {
            if(document.getElementById(this.id).checked == false)
            {
                remove(women,this.id)
            }
            else
            {
                add(women,this.id)
            }
        }
        else if(this == checkboxChildren)
        {
            if(document.getElementById(this.id).checked == false)
            {
                remove(children,this.id)
            }
            else
            {
                add(children,this.id)
            }
        }
    })
}

function remove(str,id)
{
   //id.removeAttribute('checked');
   document.getElementById(id).removeAttribute('checked');
   str.remove()
}

function add(str,id)
{
    document.getElementById(id).setAttribute('checked', 'checked');
    parent.append(str)
}


//view all btn
btn = document.getElementById("see-all");

btn.addEventListener("click" , function()
{
   if(checkboxMen.checked == false)
   {
       add(men,checkboxMen.id);
       checkboxMen.click()
   }

   if(checkboxWomen.checked == false)
   {
       add(women,checkboxWomen.id);
       checkboxWomen.click()
   }

   if(checkboxChildren.checked == false)
   {
       add(children,checkboxChildren.id);
       checkboxChildren.click()
   }
    
}) 



// Changing navbar background color on scroll
      $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('#main-nav').addClass('scrolled');
        }

        else {
              $('#main-nav').removeClass('scrolled');
        }
  })


// Smooth scroling using jQuery
$(document).ready(function()
{
    var scrollLink = $('.scroll');

    //smooth scroll
    scrollLink.click(function(event)
    {
        //remove default actions
        event.preventDefault();

        $('body, html').animate(
            {
                scrollTop: $(this.hash).offset().top
            },1000
        )
    })
})