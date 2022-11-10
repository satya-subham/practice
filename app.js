function resolveAfter3Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved 1");
    }, 3000);
  });
}

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved 2");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  try {
    console.log(await resolveAfter3Seconds());
  console.log(await resolveAfter2Seconds());
  }
  catch (err) {
    console.log(err);
  }

  
}

asyncCall();


let a = 10
  let b = 12
function add(){

  console.log(a+b);
}
add();

//karthik

function multiply(){
  return 5*6
}
multiply()



// division

function multiply(){
  return 5/6
}
multiply()

//karthik 2

function remainder(){
  return 5%6
}
remainder()

//closure

function outer(){
  let a=12
  let b=12
  return function inner(){
    return a+b
  }
}