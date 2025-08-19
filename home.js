//


function report(Name, Age, Tamil, English, Maths, Science, Social){
    let upperName= Name.toUpperCase();
    let total = Tamil + English + Maths + Science + Social;
    let maxtotal = 5 * 100;
    let percentage = (total/maxtotal) * 100;

  console.log(`<Name>: ${upperName}`);
  console.log(`Age      : ${Age}`);
  console.log(`Total    : ${total} / ${maxtotal}`);
  console.log(`Percent  : ${percentage.toFixed(2)}%`);
}

report("arun kumar", 14, 88, 92, 79, 85, 90);

