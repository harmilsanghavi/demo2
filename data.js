var express = require('express')
var mysql2 = require("mysql2")
var body = require("body-parser")
var app = express()
var technologyLength
app.use(express.json());

app.set('view engine', 'ejs')

app.use(body.urlencoded({ extended: false }))

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',

    database: 'job_application'
});



app.get("/", (req, res) => {
    connection.query(`select * from state_detail `, (err, data) => {
        if (err) throw err

        connection.query(`select * from option_master where option_master.select_id='2' `, (err, result) => {
            if (err) throw err

            connection.query(`select * from option_master where option_master.select_id='5'`, (err, coursename) => {
                if (err) throw err

                connection.query(`select * from option_master where option_master.select_id='3'`, (err, location) => {
                    if (err) throw err

                    connection.query(`select * from option_master where option_master.select_id='4'`, (err, department) => {
                        if (err) throw err

                        connection.query(`select * from option_master where option_master.select_id='6'`, (err, technology) => {
                            if (err) throw err

                            connection.query(`select * from option_master where option_master.select_id='7'`, (err, language) => {
                                if (err) throw err
                                technologyLength = technology
                                res.render('designJob', { data, result, coursename, location, department, technology, language })
                            })
                            //res.render('designJob',{data,result,coursename,location,department,technology})
                        })
                        //res.render('designJob',{data,result,coursename,location,department})
                    })
                    //res.render('designJob',{data,result,coursename,location})
                })
                //res.render('designJob',{data,result,coursename})
            })
            //res.render('designJob',{data,result})
            console.log()
        })
        //res.render('designJob',{data})
        console.log(data)
    })
})


app.listen(8002);

app.post('/', (req, res) => {


    var f_name, l_name, designation, address1, address2, email, s_number, city, gender, zipcode, state, relatonship, date_of_birth;
    f_name = req.body.fname;
    l_name = req.body.lName
    designation = req.body.designation
    address1 = req.body.address1
    address2 = req.body.address2
    email = req.body.email
    s_number = req.body.phoneNumber
    city = req.body.city
    gender = req.body.gender
    zipcode = req.body.zipcode
    state = req.body.state
    relatonship = req.body.relationship
    date_of_birth = req.body.birthday


    var coursename, passingyear, university, percentage, course

    //course = req.body.course
    coursename = req.body.courseName;
    passingyear = req.body.pyear
    university = req.body.buname
    percentage = req.body.percentage

    var comapnyname, designation1, start, end
    comapnyname = req.body.cName
    designation1 = req.body.designation1
    start = req.body.startDate
    end = req.body.endDate


    //var language;
    //language = req.body.language
    var language="",read,write,speak;
    read=req.body.read || '';
    write=req.body.write || '';
    speak=req.body.speak || '';
    

    id3='1'
   
 
    // const queryExecutor = (query) => {
    //                 return new Promise((resolve, reject) => {
    //                     console.log(query)
    //                   connection.query(query, (err, result) => {
    //                       if(err) throw err;
    //                     resolve(result)
    //                   })
    //                 })
    //               }
        
    // for(var i=0;i<language.length;i++){
    //     queryExecutor(`insert into language(ba_id,language_name,read1,write1,speak1) values('1','${language[i]}','${read[i]}','${write[i]}','${speak[i]}')`)
    // }

    var rating, technology, rating2, rating3
   


    var name, number, relation, name1, number1, relation1
    name = req.body.name
    number = req.body.number
    relation = req.body.relation

    name1 = req.body.name1
    number1 = req.body.number1
    relation1 = req.body.relation1


    var location, notice, expected, current, department
    location = req.body.location
    notice = req.body.notice
    expected = req.body.expected
    current = req.body.current
    department = req.body.department


    technology = req.body.technology || 0
    var abcd=[]
    
    // console.log(abcd)
    // console.log(technology)

    // console.log(language)
    // console.log(technology)
    // console.log(language.length)
    

    var id, id2
    var state_n

    console.log("state_n :- "+state_n)
    sqlBasic = `insert into basic_detail(f_name,l_name,designation,address1,address2,email,s_number,city,gender,zipcode,state,relationship,date_of_birth) values('${f_name}','${l_name}','${designation}','${address1}','${address2}','${email}','${s_number}','${city}','${gender}','${zipcode}','${state}','${relatonship}','${date_of_birth}')`
    connection.query(sqlBasic, (err, result) => {
        if (err) throw err

        id = result.insertId
        id2 = result.insertId



        

        console.log(id)

        console.log(id2)
        // console.log("location :- "+location)
        // console.log("notice :- "+notice)
        // console.log("expected :- "+expected)
        // console.log("current :- "+current)
        // console.log("department :- "+department)

        


        // console.log("name :- "+name)
        // console.log("number :- "+number)
        // console.log("relation :- "+relation)

        // console.log("name1 :- "+name1)
        // console.log("number1 :- "+number1)
        // console.log("relation1 :- "+relation1)



        //console.log("technology :- "+technology)



        // console.log("length:- "+language)
        // console.log("read : "+read)
        // console.log("write : "+write)
        // console.log("speak : "+speak)


        // console.log("comaony Name:- "+comapnyname)
        // console.log("designatiomn:- "+designation)
        // console.log("strt :-        "+start)
        // console.log("end    :-      "+end)
        // console.log(parseInt(id))
        // console.log(typeof(id))


        if (typeof (comapnyname, designation, start, end) == "string") {
            sqlWork = `insert into work_expericence(basic_id,company_name,designation,start_date,end_date) values('${id}','${comapnyname}','${designation1}','${start}','${end}')`;
            connection.query(sqlWork, (err, result) => {
                if (err) throw err

                console.log("data inserted")
            })
        } else {
            for (i = 0; i < comapnyname.length; i++) {

                sqlWork = `insert into work_expericence(basic_id,company_name,designation,start_date,end_date) values('${id}','${comapnyname[i]}','${designation1[i]}','${start[i]}','${end[i]}')`;
                connection.query(sqlWork, (err, result) => {
                    if (err) throw err

                    console.log("data inserted")
                })
            }
        }






        if (typeof (coursename, percentage, university, passingyear) == "string") {
            sqlEduction = `insert into eduction_detail(basic_deatil_id,cource_name,univercity,passing_year,percentage) values('${id}','${coursename}','${university}','${passingyear}','${percentage}')`;
            connection.query(sqlEduction, (err, result) => {
                if (err) throw err

                console.log("data inserted")
            })
        } else {
            for (i = 0; i < coursename.length; i++) {

                sqlEduction = `insert into eduction_detail(basic_deatil_id,cource_name,univercity,passing_year,percentage) values('${id}','${coursename[i]}','${university[i]}','${passingyear[i]}','${percentage[i]}')`;
                connection.query(sqlEduction, (err, result) => {
                    if (err) throw err

                    console.log("data inserted")
                })
            }
        }

        sqlrefrence=`insert into refrences(basic_det_id,name,r_number,relation) values('${id}','${name}','${number}','${relation}')`
        connection.query(sqlrefrence,(err,result)=>{
            if(err) throw err

            console.log("refrence1")
        })
        const queryExecutor = (query) => {
            return new Promise((resolve, reject) => {
              connection.query(query, (err, result) => {
                resolve(result)
              })
            })
          }

        queryExecutor(`insert into prefrences(basic_detai_id,location,notice_period,expected_ctc,current_ctc,department) values('${id}','${location}','${notice}','${expected}','${current}','${department}')`)
        queryExecutor(`insert into refrences(basic_det_id,name,r_number,relation) values('${id}','${name1}','${number1}','${relation1}')`)



        if(typeof(req.body.language)=='object'){
            language = `insert into language(ba_id,language_name,read1,write1,speak1) values`;
            for(let i=0;i<req.body.language.length;i++){
                language += `('${id}','${req.body.language[i]}','${read.includes(req.body.language[i]) ? 'yes' : 'no'}','${write.includes(req.body.language[i]) ? 'yes' : 'no'}','${speak.includes(req.body.language[i]) ? 'yes' : 'no'}'),`;
            }
            language = language.slice(0, language.length-1);
        }else{
            language = `insert into language(ba_id,language_name,read1,write1,speak1) values('${id}','${req.body.language}','${read==req.body.language ? 'yes' : 'no'}','${write==req.body.language ? 'yes' : 'no'}','${speak==req.body.language ? 'yes' : 'no'}')`;
        }
        connection.query(language,(err,result)=>{
            if(err) throw err;
    
            console.log("record")
        })


        for(var i=0;i<technology.length;i++){
            abcd.push(req.body['rating'+technology[i]])
        }
        for(var i=0;i<abcd.length;i++){
            if(typeof(technology)=="string"){
                sql=`insert into technology(bas_id,technology_name,rating) values('${id}','${technology}','${abcd[i]}')`
            }else{
                sql=`insert into technology(bas_id,technology_name,rating) values('${id}','${technology[i]}','${abcd[i]}')`
            }
            connection.query(sql,(err,result)=>{
                if(err) throw err
    
                console.log("inserted")
            })
        }



        // console.log("course name:- " + coursename)
        // console.log("passing :- " + passingyear)
        // console.log("uni :-" + university)
        // console.log("percen :- " + percentage)
        //console.log("course :- "+course)
        var num=0
        var num2='NULL'
        //console.log(f_name +" " + l_name + " " + designation +  " " +address1 +  " " +address2 +  " " +email + " " + s_number + " " + city +  " " +gender +  " " +zipcode +  " " +state +  " " +relatonship +  " " +date_of_birth)
        var sql=`select * from basic_detail where is_delete='${num}' or is_delete IS NULL`;
        console.log(sql)
        connection.query(sql,(err,data)=>{
            if(err) throw err

            res.render("welcome",{data})
            
        })
       
    })

})

app.get("/fetch",(req,res)=>{
    var id=req.query.id
    //console.log(id)
    connection.query(`select * from city_detail where state_id='${id}'`,(err,data)=>{
        if(err) throw err

        res.send(data)
    })
})

app.get("/delete",(req,res)=>{
    var id1=req.query.id
    var num=0;
    console.log("delete :- "+id1)
    sql=`update basic_detail set is_delete=1 where id='${id1}'`;
    connection.query(sql,(err,data)=>{
        if(err) throw err

        else{
            res.json(data)
           console.log("updated")
        }
    })
    // connection.query(`select * from basic_detail where is_delete='${num}' or is_delete IS NULL`,(err,data)=>{
    //     if(err) throw err

    //     res.render("welcome",{data})
    // })
})

app.get("/search", (req, res) => {
    var searchValue = req.query.search
    var multi = req.query.multi

    
    var arr = [], arr2 = [], symbol = []

    var f_name, l_name, s_number, email, city, designation,address1,address2,gender,zipcode,state

    for (var i = 0; i < searchValue.length; i++) {
        if (searchValue[i] == '^' || searchValue[i] == '~' || searchValue[i] == '&' || searchValue[i] == '!' ||
            searchValue[i] == '%' || searchValue[i] == '#') {
            arr.push(i)
            symbol.push(searchValue[i])
        }
    }
    console.log("String :- " + searchValue)
    console.log("array :- " + arr)

    for (var i = 0; i < arr.length; i++) {
        arr2.push(searchValue.substring(arr[i] + 1, arr[i + 1]))
    }
    var sql = `select * from basic_detail where `
    var sql2= `select count(id) as count from basic_detail where `
    if (multi == 'and') {
       
        console.log(arr2)
        for (var i = 0; i < symbol.length; i++) {
            if (symbol[i] == '^') {
                f_name = arr2[i]
                sql += `f_name="${f_name.trim()}" and `
                sql2 += `f_name="${f_name.trim()}" and `
            }
            else if (symbol[i] == '~') {
                l_name = arr2[i]
                sql += `l_name="${l_name.trim()}" and `
                sql2 += `l_name="${l_name.trim()}" and `
            }
            else if (symbol[i] == '&') {
                s_number = arr2[i]
                sql += `s_number="${s_number.trim()}" and `
                sql2 += `s_number="${s_number.trim()}" and `
            }
            else if (symbol[i] == '!') {
                email = arr2[i]
                sql += `email="${email.trim()}" and `
                sql2 += `email="${email.trim()}" and `
            }
            else if (symbol[i] == '%') {
                city = arr2[i]
                sql += `city="${city.trim()}" and `
                sql2 += `city="${city.trim()}" and `
            }
        }
        sql = sql.slice(0, (sql.length - 5))
        sql2 = sql2.slice(0, (sql2.length - 5))
        console.log(sql)
        console.log("count :- "+sql2)
        
    }else{
        
        console.log(arr2)
        for (var i = 0; i < symbol.length; i++) {
            if (symbol[i] == '^') {
                f_name = arr2[i]
                sql += `f_name="${f_name.trim()}" `
                sql +='or '

                sql2 += `f_name="${f_name.trim()}" `
                sql2 +='or '
            }
            else if (symbol[i] == '~') {
                l_name = arr2[i]
                sql += `l_name="${l_name.trim()}" `
                sql +='or '

                sql2 += `l_name="${l_name.trim()}" `
                sql2 +='or '
            }
            else if (symbol[i] == '&') {
                s_number = arr2[i]
                sql += `s_number="${s_number.trim()}" `
                sql +='or '

                sql2 += `s_number="${s_number.trim()}" `
                sql2 +='or '
            }
            else if (symbol[i] == '!') {
                email = arr2[i]
                sql += `email="${email.trim()}" `
                sql +='or '

                sql2 += `email="${email.trim()}" `
                sql2 +='or '
            }
            else if (symbol[i] == '%') {
                city = arr2[i]
                sql += `city="${city.trim()}" `
                sql +='or '

                sql2 += `city="${city.trim()}" `
                sql2 +='or '
            }
        }
        sql = sql.slice(0, (sql.length - 3))
        sql2 = sql2.slice(0, (sql2.length - 3))
        
        console.log(sql)
    }
    console.log(sql2)
    var data=[]
    connection.query(sql, (err, result) => {
        //res.render('esearch',{searchResult:result})
        if (err) throw err;
        console.log(result)
        data=result
        res.render('welcome', { data: result, searchValue })
    })
 })