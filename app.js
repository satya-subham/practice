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


function add(){
  let a = 10
  let b = 12

  console.log(a+b);
}
add();