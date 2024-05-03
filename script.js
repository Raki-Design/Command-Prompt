const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const input = document.getElementById('input');

input.focus();

input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    const command = input.value.trim();
    input.value = '';

    output.innerHTML += '<div>$ ' + command + '</div>';
    
    // Execute command
    executeCommand(command);
    
    // Scroll to bottom
    output.scrollTop = output.scrollHeight;
  }
});

function executeCommand(command) {
  const args = command.split(' ');
  const cmd = args[0].toLowerCase();

  switch (cmd) {
    case 'dir':
      listDirectory();
      break;
    case 'cd':
      changeDirectory(args[1]);
      break;
    case 'echo':
      echo(args.slice(1).join(' '));
      break;
    case 'cls':
      clearScreen();
      break;
    case 'help':
      showHelp();
      break;
    case 'ipconfig':
      showIpConfig();
      break;
    case 'ping':
      ping(args.slice(1));
      break;
    case 'mkdir':
      createDirectory(args.slice(1));
      break;
    case 'rmdir':
      removeDirectory(args.slice(1));
      break;
    case 'del':
      deleteFile(args.slice(1));
      break;
    case 'type':
      typeFile(args.slice(1));
      break;
    case 'copy':
      copyFile(args.slice(1));
      break;
    case 'move':
      moveFile(args.slice(1));
      break;
    case 'ren':
      renameFile(args.slice(1));
      break;
    case 'attrib':
      changeAttributes(args.slice(1));
      break;
    case 'start':
      startProcess(args.slice(1));
      break;
    case 'tasklist':
      listProcesses();
      break;
    case 'taskkill':
      killProcess(args.slice(1));
      break;
    case 'shutdown':
      shutdownSystem(args.slice(1));
      break;
    case 'exit':
      exitTerminal();
      break;
    default:
      output.innerHTML += '<div>Command not recognized</div>';
  }
}

function listDirectory() {
  // Simulate directory listing
  const files = ['file1.txt', 'file2.txt', 'folder1', 'folder2'];
  output.innerHTML += '<div>';
  files.forEach(file => output.innerHTML += file + '<br>');
  output.innerHTML += '</div>';
}

let currentDirectory = '/';

function changeDirectory(directory) {
  // Simulate changing directory
  currentDirectory = directory || '/';
  output.innerHTML += '<div>Directory changed to ' + currentDirectory + '</div>';
}

function echo(text) {
  output.innerHTML += '<div>' + text + '</div>';
}

function clearScreen() {
  output.innerHTML = '';
}

function showHelp() {
  output.innerHTML += '<div>Available commands:<br>dir - List directory contents<br>cd - Change directory<br>echo - Display text<br>cls - Clear screen<br>help - Display help information<br>ipconfig - Show IP configuration<br>ping - Ping a remote host<br>mkdir - Create a directory<br>rmdir - Remove a directory<br>del - Delete a file<br>type - Display the contents of a text file<br>copy - Copy a file<br>move - Move a file<br>ren - Rename a file<br>attrib - Change file attributes<br>start - Start a process<br>tasklist - List running processes<br>taskkill - Terminate a process<br>shutdown - Shut down the system<br>exit - Exit the terminal</div>';
}

function showIpConfig() {
  output.innerHTML += '<div>IP Configuration<br>IPv4 Address: 192.168.1.100<br>Subnet Mask: 255.255.255.0<br>Default Gateway: 192.168.1.1</div>';
}

function ping(args) {
  const host = args[0];
  output.innerHTML += '<div>Pinging ' + host + '...</div>';
  // Simulate ping
  setTimeout(function() {
    output.innerHTML += '<div>Reply from ' + host + ': bytes=32 time=10ms TTL=64</div>';
  }, 1000);
}

function createDirectory(args) {
  const directory = args[0];
  output.innerHTML += '<div>Creating directory ' + directory + '...</div>';
  // Simulate directory creation
  setTimeout(function() {
    output.innerHTML += '<div>Directory ' + directory + ' created successfully</div>';
  }, 1000);
}

function removeDirectory(args) {
  const directory = args[0];
  output.innerHTML += '<div>Removing directory ' + directory + '...</div>';
  // Simulate directory removal
  setTimeout(function() {
    output.innerHTML += '<div>Directory ' + directory + ' removed successfully</div>';
  }, 1000);
}

function deleteFile(args) {
  const file = args[0];
  output.innerHTML += '<div>Deleting file ' + file + '...</div>';
  // Simulate file deletion
  setTimeout(function() {
    output.innerHTML += '<div>File ' + file + ' deleted successfully</div>';
  }, 1000);
}

function typeFile(args) {
  const file = args[0];
  // Simulate file content
  const content = 'This is the content of ' + file + '\nLorem ipsum dolor sit amet, consectetur adipiscing elit.';
  output.innerHTML += '<div>' + content + '</div>';
}

function copyFile(args) {
  const source = args[0];
  const destination = args[1];
  output.innerHTML += '<div>Copying file ' + source + ' to ' + destination + '...</div>';
  // Simulate file copy
  setTimeout(function() {
    output.innerHTML += '<div>File ' + source + ' copied to ' + destination + '</div>';
  }, 1000);
}

function moveFile(args) {
  const source = args[0];
  const destination = args[1];
  output.innerHTML += '<div>Moving file ' + source + ' to ' + destination + '...</div>';
  // Simulate file move
  setTimeout(function() {
    output.innerHTML += '<div>File ' + source + ' moved to ' + destination + '</div>';
  }, 1000);
}

function renameFile(args) {
  const oldName = args[0];
  const newName = args[1];
  output.innerHTML += '<div>Renaming file ' + oldName + ' to ' + newName + '...</div>';
  // Simulate file rename
  setTimeout(function() {
    output.innerHTML += '<div>File ' + oldName + ' renamed to ' + newName + '</div>';
  }, 1000);
}

function changeAttributes(args) {
  const file = args[0];
  const attributes = args[1];
  output.innerHTML += '<div>Changing attributes of file ' + file + ' to ' + attributes + '...</div>';
  // Simulate changing file attributes
  setTimeout(function() {
    output.innerHTML += '<div>Attributes of file ' + file + ' changed to ' + attributes + '</div>';
  }, 1000);
}

function startProcess(args) {
  const process = args[0];
  output.innerHTML += '<div>Starting process: ' + process + '...</div>';
  // Simulate starting a process
  setTimeout(function() {
    output.innerHTML += '<div>Process ' + process + ' started</div>';
  }, 1000);
}

function listProcesses() {
  output.innerHTML += '<div>Process List<br>Process 1<br>Process 2<br>Process 3</div>';
}

function killProcess(args) {
  const process = args[0];
  output.innerHTML += '<div>Killing process: ' + process + '...</div>';
  // Simulate killing a process
  setTimeout(function() {
    output.innerHTML += '<div>Process ' + process + ' killed</div>';
  }, 1000);
}

function shutdownSystem(args) {
  const option = args[0];
  output.innerHTML += '<div>Shutting down system (' + option + ')...</div>';
  // Simulate system shutdown
  setTimeout(function() {
    output.innerHTML += '<div>System shutdown complete</div>';
  }, 1000);
}

function exitTerminal() {
  output.innerHTML += '<div>Exiting terminal...</div>';
  // Simulate exiting terminal
  setTimeout(function() {
    output.innerHTML += '<div>Terminal exited</div>';
  }, 1000);
}
