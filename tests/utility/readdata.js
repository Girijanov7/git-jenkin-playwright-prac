import excel from'exceljs'

export async function readdatafromexcel(path,sheetname,rownum,cellnum)
{

const book=new excel.Workbook()
await book.xlsx.readFile(path)
const sheet=await book.getWorksheet(sheetname)
const data=sheet.getRow(rownum).getCell(cellnum).value
return data
}
/*
export async function writedata(path,sheetname) {
    const book=new excel.Workbook()
    await book.xlsx.readFile(path)
    const sheet=await book.addWorksheet(sheetname)
    sheet.getRow(5).getCell(6).value='lakshmi'
    await book.xlsx.writeFile(path)
}
*/
    //for reading/fetching multiple row and multiple column

    export async function readmultiple(path,sheetname) 
    {
        

const book=new excel.Workbook()
await book.xlsx.readFile(path)
const sheet=await book.getWorksheet(sheetname)
console.log(sheet.rowCount);
console.log(sheet.columnCount);
const data =[]

for(let row=1; row<=sheet.rowCount; row++)
    {
const rowdata=[]
for(let column=1; column<=sheet.columnCount; column++)
    {

    let cellvalue=sheet.getRow(row).getCell(column).value
    rowdata.push(cellvalue)
}

data.push(rowdata)
    }
    


    return data
    }
    


  
    
