import { readdatafromexcel ,writedata } from './utility/readdata.js'
import{test} from '@playwright/test'

test('readdata',async()=>{
    // let data=await readdatafromexcel('./testdata/Book1.xlsx','Sheet1',1,1)
    // console.log(data);
    let data2=await writedata('./testdata/Book1.xlsx','Sheet4')
    console.log(data2);
    
})
