import axios from "axios"
import bloglist from '../../utility/data/blog.json'
import { ICard } from "../../utility/type";
import React, { FC } from "react";
import { GetServerSideProps } from "next"
const blogHandler = async (req: any, res: any) => {

  var lists: Array<ICard> = []
  if (req.query.id) {
    lists = bloglist.filter(o => o.href === req.query.id);
  }
  lists = bloglist
  // console.log("lists",lists)
  res.status(200).json(lists);
}


export default blogHandler
