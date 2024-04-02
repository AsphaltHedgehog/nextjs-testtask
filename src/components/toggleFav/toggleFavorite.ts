export interface ToggleFavoriteProps {
  jobId: string;
  favArr: string[];
  setFavArr: React.Dispatch<React.SetStateAction<string[]>>
}

const toggleFavorite = ({ jobId, favArr, setFavArr }: ToggleFavoriteProps) => {
  if (!jobId && favArr.length < 0) {
    return
    // add toast for error
  }
    
  let favoriteArrayCopy = [...favArr];

  if (favoriteArrayCopy.includes(jobId)) {
    const index = favoriteArrayCopy.indexOf(jobId);

    if (index !== -1) {
      favoriteArrayCopy.splice(index, 1);
    }
  } else {
    favoriteArrayCopy.push(jobId)
  }

  setFavArr(favoriteArrayCopy)
  localStorage.setItem("data", JSON.stringify(favoriteArrayCopy));
};

export default toggleFavorite