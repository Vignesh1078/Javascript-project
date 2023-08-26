
document.getElementById("newbtn").addEventListener("click",myfunction);
document.getElementById("newbtn").addEventListener("click",clearInput);

function clearInput(){
    let getValue= document.querySelector('.name');
      if (getValue.value !="") 
      {
          getValue.value = "";
          
      }  
}

function myfunction()
{
    if(document.querySelector("input").value.length ==0)
    {
        alert("please enter Text");
    }
    else
    {
        

        document.querySelector('#endtask').innerHTML +=`
            <div id="endresult">

                    <span class="endspan">
                            ${document.querySelector('#newlist input').value}
                    </span>
                    <button type="submit" class="endbtn"  >
                    <i class="fa fa-trash-o" style="font-size:35px;color:red"></i>                   
                    </span>
                    </button>
            
            </div>
        
        `;

        let current_result = document.querySelectorAll(".endbtn");
        for(let i=0; i<current_result.length; i++)
        {
            current_result[i].onclick=
             function()
             {
                this.parentNode.remove();
             }
        }
       
    }
    

}
