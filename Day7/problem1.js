function avgRun( run1,run2,run3,run4,run5,run6){
  return (run1 + run2 + run3 + run4 + run5 + run6)/6;
}

if(avgRun(297,376,177,376,197,401) > avgRun(398,165,496,58,481,115)){
  console.log("Ban is winner");
}
else{
  console.log("Ind is winner");
}
