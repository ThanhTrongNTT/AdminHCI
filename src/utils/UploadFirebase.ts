import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import storage from '~/api/firebase/Firebase';

export const uploadFireBase = (images: any) => {
    const [urls, setUrls] = useState<Array<string>>([]);
    const promises: Array<any> = [];
    // eslint-disable-next-line array-callback-return
    images.map((image: any) => {
        const imageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(imageRef, image);
        promises.push(uploadTask);
        uploadTask.on(
            'state_changed',
            (snaphot: any) => {},
            (err: any) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
                    setUrls((prev) => [...prev, url]);
                });
            },
        );
    });
    Promise.all(promises)
        .then(() => {})
        .catch((err) => console.log(err));
};
