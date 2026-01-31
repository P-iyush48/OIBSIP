let sp = document.querySelector(".sp");
        let counter = '0';

        function process(){
            counter++ ;
            // let dtFormat;
            // setTimeout( () => {
            //     let d = new Date();
            //     let time = `${d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()}`;
            //     let date = `${d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()}`;
                
            //     dtFormat = `${time+' '+date}`;
            // }, 1000);

            let inputTask = document.querySelector("#inputTask").value;
            let taskValue = inputTask.trim();

            if(taskValue == ""){
                console.log("task length : "+ taskValue.length);
                return alert("Please enter your task..!");
            }

            let noTask = document.createElement("h4");
            noTask.setAttribute("class","noTask");
            noTask.textContent = `Task ${counter} :`;

            sp.append(noTask);
            let li = document.createElement("li");
            li.textContent = taskValue;
            li.setAttribute("class","li");

            noTask.appendChild(li);

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.setAttribute("class","deleteBtn");

            sp.appendChild(deleteBtn);

            deleteBtn.addEventListener("click",() =>{
                noTask.remove();
                li.remove();
                deleteBtn.remove();
                counter = '';
                console.log(`Task\tDeleted`);
            });

            console.log('Total task created : ' + counter);
            console.log(dtFormat);
            
        }

      