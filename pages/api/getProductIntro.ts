import axios from "axios"
import productIntro from '../../utility/data/productIntro.json'

import { IProductIntro } from "../../utility/type";

const blogHandler = async (req: any, res: any) => {

  var lists: Array<IProductIntro> = []
  if (req.query.id) {
    lists = productIntro.filter(o => o.href === req.query.id);
  }
  lists = productIntro
  // console.log("lists",lists)
  res.status(200).json(lists);
}


export default blogHandler
