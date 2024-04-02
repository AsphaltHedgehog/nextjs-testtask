import { toast } from "react-toastify";

export interface ToggleFavoriteProps {
  jobId: string;
  setFavArr: React.Dispatch<React.SetStateAction<string[]>>
  setFavoriteIds?: React.Dispatch<React.SetStateAction<string[]>>
}

const toggleFavorite = async ({ jobId, setFavArr, setFavoriteIds }: ToggleFavoriteProps) => {
  if (!jobId) {
    toast.error('internal app error')
    return
  };
  
  
    let favoriteArrayCopy = []
    const storageData = await localStorage.getItem("data");
    if (storageData !== null) {
      favoriteArrayCopy = JSON.parse(storageData);
    }

  if (favoriteArrayCopy.includes(jobId)) {
    const index = favoriteArrayCopy.indexOf(jobId);
    if (index !== -1) {
      favoriteArrayCopy.splice(index, 1);
    };
  } else {
    favoriteArrayCopy.push(jobId)
  };

  if (setFavoriteIds) {
    setFavoriteIds(favoriteArrayCopy)
  };

  setFavArr(favoriteArrayCopy);
  localStorage.setItem("data", JSON.stringify(favoriteArrayCopy));
};

export default toggleFavorite;