import { Button } from "antd";
import { useEffect, useState } from "react";
import { getAllGollery } from "../../../request/gollery";
import Style from "./index.module.less";
import { useNavigate } from "react-router-dom";
const CoverMap = (props) => {
    if (props.coverList.length > 0) {
      return props.coverList.map((item) => {
        return (
        <img
          alt={item.description}
          key={item._id}   
          onClick={()=>props.navigate(`/layout/addGollery?id=${item._id}`)}
          className={Style["gollery-content-imgs-item"]}
          src={item.coverPath}
        />
      )
        
      });
    }
    return ''
  };

const Gollery = () => {
  const [coverList, setCoverList] = useState("");
  const getAllGollerys = async () => {
    const res = await getAllGollery();
    if (res.status === 200) {
      setCoverList(res.data);
    }
  };
  useEffect(() => {
    getAllGollerys();
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <div className={Style["gollery"]}>
        <div className={Style["gollery-head"]}>
          <div className={Style["gollery-head-btn"]}>
            <Button
              type="primary"
              onClick={() => navigate("/layout/addGollery")}
            >
              新增图库
            </Button>
          </div>
        </div>
        <div className={Style["gollery-content"]}><div className={Style["gollery-content-imgs"]}><CoverMap coverList={coverList} navigate={navigate}></CoverMap></div></div>
      </div>
    </>
  );
};
export default Gollery;
