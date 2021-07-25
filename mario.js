




function printPyramid(height) {
    for (let i = 0; i < height; i++) {
        let bricks ="";
        for (let j = height + 1; j > 0; j--) {

            if (j <= i + 2) { 
                bricks += "#";
            } else {
                bricks += "\u00a0";
            }
              
        
         
            }


        var p_element = document.createElement('P');
        var text_1 = document.createTextNode(bricks);
        
        p_element.appendChild(text_1);
        pyramid_1.appendChild(p_element);
        


        console.log(bricks);
    }  
}

let pyramid_1 = document.getElementById("pyramid");


printPyramid(5)

