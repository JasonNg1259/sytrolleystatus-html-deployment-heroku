let trolleys;

const savedTrolleyStatus = JSON.parse(localStorage.getItem('trolleys'));

trolleys = savedTrolleyStatus;

for(let i =0 ; i< trolleys.length; i++){
  if(trolleys[i].color==='green'){
    document.getElementById(trolleys[i].id).style.backgroundColor='lightgreen';
    document.getElementById(trolleys[i].id).style.color = 'black';
  }

  else if(trolleys[i].color==='red'){
    document.getElementById(trolleys[i].id).style.backgroundColor='red';
    document.getElementById(trolleys[i].id).style.color = 'white';
  }

  else if(trolleys[i].color==='grey'){
    document.getElementById(trolleys[i].id).style.backgroundColor='lightgrey';
    document.getElementById(trolleys[i].id).style.color = 'black';
  }
}

function changeColor(){
  for(let i =0 ; i< trolleys.length; i++){
    if(trolleys[i].id === event.target.id){
      if(trolleys[i].color=='green'){
        document.getElementById(trolleys[i].id).style.backgroundColor='red';
        document.getElementById(trolleys[i].id).style.color = 'white';
        trolleys[i].color='red';
        saveStatus(); 
      }

      else if(trolleys[i].color=='red'){
        document.getElementById(trolleys[i].id).style.backgroundColor='lightgrey';
        document.getElementById(trolleys[i].id).style.color = 'black';
        trolleys[i].color='grey';
        saveStatus(); 
      }

      else if(trolleys[i].color=='grey'){
        document.getElementById(trolleys[i].id).style.backgroundColor='lightgreen';
        document.getElementById(trolleys[i].id).style.color = 'black';
        trolleys[i].color='green';
        saveStatus(); 
      }
    } 
    console.log(trolleys[i].id + trolleys[i].color);
  }
  
}

const saveStatus = () => {
  localStorage.setItem('trolleys', JSON.stringify(trolleys));
}
