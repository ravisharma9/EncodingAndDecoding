<!DOCTYPE html>
<html lang="en"><head>
    <link rel="stylesheet" href="./Encoding and Decoding_files/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
		</head>
  <body>
  	<div class="container-fluid">
  		<h1>Encoding And Decoding</h1>
  		<div class="row">
  			<div class="col-md-4">
	          <div class="panel panel-primary">
	            <div class="panel-body">
	              <p>Given a string reverse the sequence of characters and replace the character with successive 3rd alphabetic character for encoding.
									<br>
									Program to encode and decode the message. Leave all chars except a-z as it is.</p>	              <p>Algoritm explained below</p><b>Example of reverse Sequence</b>
	              <table class="table table-striped">
	              	<thead>
	              		<tr>
	              			<th>Sr</th>
	              			<th>String</th>
	              			<th>Reverse</th>
	              		</tr>
	              	</thead>
	              	<tbody>
	              		<tr>
	              			<td>1</td>
	              			<td>i am a developer</td>
	              			<td>repoleved a ma i</td>
	              		</tr>	              		
	              		<tr>
	              			<td>1</td>
	              			<td>lazy</td>
	              			<td>yzal</td>
	              		</tr>
	              	</tbody>
	              </table>
	              <hr>
	               <b>Example of replacement of character with successive 3rd char</b>
	              <table class="table table-striped">
	              	<thead>
	              		<tr>
	              			<th>Sr</th>
	              			<th>String</th>
	              			<th>Reverse</th>
	              		</tr>
	              	</thead>
	              	<tbody>
	              		<tr>
	              			<td>1</td>
	              			<td>i am a developer</td>
	              			<td>l dp d ghyhorshu</td>
	              		</tr>	              		
	              		<tr>
	              			<td>1</td>
	              			<td>lazy</td>
	              			<td>odcb</td>
	              		</tr>
	              	</tbody>
	              </table>
	              <hr>
	              <b>Encoding</b>
	              <table class="table table-striped">
	              	<thead>
	              		<tr>
	              			<th>Input</th>
	              			<th>step1 Reverse</th>
	              			<th>step2 replace</th>
	              		</tr>
	              	</thead>
	              	<tbody>
	              		<tr>
	              			<td>i am a developer</td>
	              			<td>repoleved a ma i</td>
	              			<td>uhsrohyhg d pd l</td>
	              		</tr>	              		
	              		<tr>
	              			<td>lazy</td>
	              			<td>yzal</td>
	              			<td>bcdo</td>
	              		</tr>
	              	</tbody>
	              </table>
	              <hr>
	              <b>Decoding</b>
	              <table class="table table-striped">
	              	<thead>
	              		<tr>
	              			<th>Input</th>
	              			<th>Output</th>
	              		</tr>
	              	</thead>
	              	<tbody>
	              		<tr>
	              			<td>uhsrohyhg d pd l</td>
	              			<td>i am a developer</td>
	              		</tr>	              		
	              		<tr>
	              			<td>bcdo</td>
	              			<td>lazy</td>
	              		</tr>
	              	</tbody>
	              </table>	              
	            </div>    
	          </div>
	        </div>
  		</div> 
  	</div>
		</body></html>
