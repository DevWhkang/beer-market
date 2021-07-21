import React from "react";
import { Tree } from "antd";
import { treeType } from "./BeerDetailInfo";

const BeerInfoTree = ({ element, type }) => {
  const treeData = (type) => {
    switch (type) {
      case treeType.METHOD:
        return [
          {
            title: "Mash temp",
            key: "0",
            children: element.mash_temp.map((v) => {
              return {
                title: `temp: ${v.temp.value}℃, duration: ${v.duration}`,
                key: `${v.temp.value + Math.random()}`,
              };
            }),
          },
        ];
      case treeType.INGREDIENTES:
        return [
          {
            title: "Malt",
            key: "0",
            children: element.malt.map((v) => {
              return {
                title: `${v.name}, Amount: ${v.amount.value}kg`,
                key: `${v.name + Math.random()}`,
              };
            }),
          },
          {
            title: "Hops",
            key: "1",
            children: element.hops.map((v) => {
              return {
                title: `${v.name}, Amount: ${v.amount.value}g, Add: ${v.add}, Attribute: ${v.attribute}`,
                key: `${v.name + Math.random()}`,
              };
            }),
          },
        ];
      default:
        return [];
    }
  };

  return <Tree treeData={treeData(type)} />;
};

export default BeerInfoTree;
