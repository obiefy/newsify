
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { useState } from "react";

const Follow = ({ item, value }) => {
  const { user } = useAuth({ middleware: 'guest', redirectIfAuthenticated: false });
  const [isLoading, setIsLoading] = useState(false);

  const [categories, setCategories] = useState(user.categories || []);
  const [sources, setSources] = useState(user.sources || []);
  let type = 'follow';

  if(item === 'category') {
    type = categories.includes(value) ? 'unfollow' : 'follow';
  }

  if(item === 'source') {
    type = sources.includes(value) ? 'unfollow' : 'follow';
  }
  
  const handle = async () => {
    setIsLoading(true);
    const {data} = await axios.post('/api/follow', {
      type,
      item,
      value,
    });
    setIsLoading(false);
    setCategories(data.data.categories);
    setSources(data.data.sources);
  }
  return (
    <>
    {
      user && 
      <div className="flex ml-2 text-xs">
        {isLoading && <span className="text-gray-600">...</span>}
        {!isLoading && <button onClick={handle} className={`ml-2 text-xs ${type === 'unfollow' ? 'text-red-600' : 'text-green-600'}`}>{type === 'unfollow' ? '-' : '+'} {type}</button>}
      </div>
    }
    </>
  );

}

export default Follow;