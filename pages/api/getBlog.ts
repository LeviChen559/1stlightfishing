import axios from "axios"
import bloglist from '../../utility/data/blog.json'
import { ICard } from "../../utility/type";

export default async function handler(req: any, res: any) {

  var lists: Array<ICard> = []
  if (req.query.id) {
    lists = bloglist.filter(o => o.id === req.query.id);
  }
    lists= bloglist
  // console.log("lists",lists)
  res.status(200).json(lists);
}



