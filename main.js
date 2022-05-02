function listAll() {
    const storageRef = storage.ref();


    // to get from folder
    // var listRef = storageRef.child('selfies');
    var listRef = storageRef;

    // Find all the prefixes and items.
    listRef.listAll()
        .then((res) => {
            res.prefixes.forEach((folderRef) => {
                // All the prefixes under listRef.
                // You may call listAll() recursively on them.
                // console.log(folderRef);
            });
            res.items.forEach((itemRef) => {
                // All the items under listRef.
                itemRef.getDownloadURL().then((url) => {
                    // console.log("download url : " + url);
                    var selfie = document.createElement('img')
                    selfie.src = url
                    selfie.style.margin = "12px"
                    selfie.style.padding = "12px"
                    document.querySelector(".selfies").appendChild(selfie)
                });
            });
        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log(error);
        });
}

