function admis() {
  var form = document.getElementById("myForm");
  var naam = document.getElementById("naam").value;
  var age = document.getElementById("age").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;

  // Log the input values
  console.log("Name:", naam);
  console.log("Age:", age);
  console.log("Mobile Number:", mobile);
  console.log("Email:", email);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   var naam="Naman";
//   var age=18;
//   var mobile=91;
//   var email="namankhandelwal1607@gmail.com";
  const { ethers, JsonRpcProvider } = require("ethers"); //similar like importing some other files/// import { ethers } from "ethers";
  const fs = require("fs-extra"); // to use SimpleStorage.sol extra files
  require("dotenv").config();
  async function main() {
    // Json Rpc Provider - Connecting to local blockchain
    const provider = new JsonRpcProvider(process.env.RPC_URL);

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    
    const abi = fs.readFileSync(
      "./admission_sol_admission.abi",
      "utf8"
    );

    const binary = fs.readFileSync(
      "./admission_sol_admission.bin",
      "utf8"
    );


    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, Please wait...");

    

    const contract = await contractFactory.deploy();
    await contract.deploymentTransaction().wait(1);
    //console.log(`Contract Address ${contract.Address}`);

    const givingData = await contract.takeInfo(naam, age, mobile, email);
    //console.log(`Printing data for the first time ${givingData.naam}`);
    // const transactionResponse = await contract.store("7");
    // const transactionReceipt = await transactionResponse.wait(1);
    const studentDetais = await contract.getInfo(0);
    console.log(`Student Details: ${studentDetais}`);
  }

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

  // You can now use the form data for further processing, such as submitting it to a server
 }
