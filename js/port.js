$(document).ready(function(){

    $(".fullpage").fullpage({


        // ------페이지에 들어가면 바로 이벤트가 실행된다------
        afterRender: function(){
            $(".section1 .text-box .p1").addClass("active");
            $(".section1 .text-box .p2").addClass("active");
            $(".section1 .text-box .p3").addClass("active");
            $(".section1 .text-box .p4").addClass("active");
        },

        onLeave: function(origin, destination, direction){

            var leavingSection = this;
    
            if(destination.index == 0){
                $(".section1 .text-box .p1").addClass("active");
                $(".section1 .text-box .p2").addClass("active");
                $(".section1 .text-box .p3").addClass("active");
                $(".section1 .text-box .p4").addClass("active");
            }
            else if(destination.index == 1){
                $(".section2 .background-box>.rotate-box2").addClass("active");
                $(".section2 .introduce-box>.cell-box2>.tool-box>.overflow-box>.tool-img-box").addClass("active");
                $(".section2 .introduce-box>.cell-box1>.text-box>.translatey1").addClass("active");
                $(".section2 .introduce-box>.cell-box1>.text-box>.translatey2").addClass("active");
                $(".section2 .introduce-box>.cell-box1>.text-box>.translatey3").addClass("active");
                $(".section2 .introduce-box>.cell-box1>.text-box>.translatey4").addClass("active");
            }
            else if(destination.index == 2){
            }
            else if(destination.index == 3){
            } 
            if(destination.index != 0){
                $(".section1 .text-box .p1").removeClass("active");
                $(".section1 .text-box .p2").removeClass("active");
                $(".section1 .text-box .p3").removeClass("active");
                $(".section1 .text-box .p4").removeClass("active");
            }
            if(destination.index != 1){
                $(".section2 .background-box>.rotate-box2").removeClass("active");
                $(".section2 .introduce-box>.cell-box2>.tool-box>.overflow-box>.tool-img-box").removeClass("active");
                $(".section2 .introduce-box>.cell-box1>.text-box>.translatey1").removeClass("active");
                $(".section2 .introduce-box>.cell-box1>.text-box>.translatey2").removeClass("active");
                $(".section2 .introduce-box>.cell-box1>.text-box>.translatey3").removeClass("active");
                $(".section2 .introduce-box>.cell-box1>.text-box>.translatey4").removeClass("active");
            }

        }

    });


    // -----페이지이동버튼만들때 사용------------
    $(".nav-wrap>.nav-wrap2>ul>li").click(function(){
        var index = $(this).index()+1
        
        fullpage_api.moveTo(index);
    });


    $(".slick-wrap").slick({
        slidesToShow: 1,
        dots:true,
        arrows: false ,
    });

$(".arrow-left-box").click(function(){
    $(".slick-wrap").slick("slickPrev");
});

$(".arrow-right-box").click(function(){
    $(".slick-wrap").slick("slickNext");
});


});