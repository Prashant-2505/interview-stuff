//* You are given a list of strings that represent paths in a file system. Each path has a folder name and possibly subfolders or files. The file paths are relative, and some paths might refer to subdirectories or files within other directories.

//  const paths = [
//   "/home/user/docs/file1.txt",
//   "/home/user/docs/file2.txt",
//   "/home/user/music/song.mp3",
//   "/home/user/docs/folder1/file3.txt",
//   "/home/user/music/folder2/song2.mp3"
// ];

//& output 
// {
//     '/home/user/docs': [
//       '/home/user/docs/file1.txt',
//       '/home/user/docs/file2.txt',
//       '/home/user/docs/folder1/file3.txt'
//     ],
//     '/home/user/music': [
//       '/home/user/music/song.mp3',
//       '/home/user/music/folder2/song2.mp3'
//     ]
//   }
  

function groupPathsByPrefix(paths) {
    const result = {};
  
    paths.forEach(path => {
      // Split the path into parts (directories/files)
      const parts = path.split('/');
  
      // Build the prefix (directories) progressively
      for (let i = 1; i < parts.length; i++) {  // Start from 1 to skip the initial empty string
        const prefix = '/' + parts.slice(1, i + 1).join('/');  // Construct prefix
  
        // If this prefix isn't in the result, create an array for it
        if (!result[prefix]) {
          result[prefix] = [];
        }
  
        // Add the current path to the group
        result[prefix].push(path);
      }
    });
  
    return result;
  }
  
  const paths = [
    "/home/user/docs/file1.txt",
    "/home/user/docs/file2.txt",
    "/home/user/music/song.mp3",
    "/home/user/docs/folder1/file3.txt",
    "/home/user/music/folder2/song2.mp3"
  ];
  
  const groupedPaths = groupPathsByPrefix(paths);
  console.log(groupedPaths);
  