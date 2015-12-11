# futarchy

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/josiahwood/futarchy?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
<div id="compileInstructions">
Compile Instructions:

<p>install truffle <br>
install eth-testrpc

run command
<ul>
  <li>
    git clone "https://github.com/josiahwood/futarchy.git"
  </li>
  <li>
    cd futarchy
  </li>
  <li>
    truffle deploy
  </li>
</ul>
</div>

Troubleshooting:

> The contract code couldn't be stored, please check your gas amount.

  This issue could be caused by a small gas limit.

  if that is the case then raising the default gas limit when deploying a contract should fix the issue.

  To change the gas limit I needed to access where this variable is set in the code and change it to 314,159,265 (or some other arbitrary number)
  I used vim to change the file but I think any text editor can be used as long as it has root permissions.


open terminal:
> npm list -g truffle;

this will give you the location of where truffle is install on your machine if it is install globally...<br>
if it is installed locally then I think the command for that is<br>
>npm bin

after you know where truffle is installed... <br>

>cd [truffle location]/truffle/lib/ <br>
>sudo vim contracts.es6 <br>

there should be a line of code like this: <br>
<pre>
contract.new({
            from: coinbase,
            gas: 3141592,
            gasPrice: 1000000000000 // I'm not sure why this is so high. geth made me do it.
          }).then(function(instance) {
            contract_class.address = instance.address;
            callback(null, contract_class);
          }).catch(function(err) {
            callback(new DeployError(err.message, key));
          });
</pre>
change the gas to a bigger or arbitrary value and save
