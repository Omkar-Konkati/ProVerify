async function main(){
    const Product = await ethers.getContractFactory("product");    try{
        console.log("--------Deploying contract---------------")
        const product = await Product.deploy();
        await product.deployed()
        console.log(`Deployed contract at ${product.address}`)
    }catch (error) {
        log(` Failed because---${error}`);
  
  }

  }

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });