import {  Grid2} from "@mui/material";
import { useFetch } from "./useFetch";
import Card1 from "./Card1";

const Promise = () => {
  const { data } = useFetch();
  console.log(data);
  return (
    <>
      <div>
        <Grid2 container spacing={2}>
          {data.map((item) => (
            <Grid2 key={item?.value?.data?.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card1
                title={item?.value?.data?.title}
                url={item?.value?.data?.url}
                type={item?.value?.data?.type}
                id={item?.value?.data?.id}
              />
            </Grid2>
          ))}
        </Grid2>
      </div>
    </>
  );
};
export default Promise;
