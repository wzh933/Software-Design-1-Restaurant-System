package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import net.sf.jsqlparser.expression.DateTimeLiteralExpression;

import java.util.Date;
//import jdk.jfr.DataAmount;

@TableName("user")
@Data

public class User {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String username;
    private String nickName;
    private String password;
    private Integer age;
    private String sex;
    private String address;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "UTC+8")
    private Date date;
    private Integer person;
    //淮扬菜
    private Integer dpr;
    private Integer ssgy;
    private Integer mlz;
    private Integer ysy;
    private Integer shs;
    private Integer zgs;
    private Integer yxfs;
    private Integer szt;
    private Integer hyt;
    private Integer dzx;
    private Integer xlx;

    //酒水
    private Integer ftmt;
    private Integer xhlj;
    private Integer pj;

    //东北菜
    private Integer gbr;
    private Integer dsx;
    private Integer zcf;
    private Integer dft;
    private Integer bsdg;
    private Integer dfs;

    //主食
    private Integer mf;
    private Integer ycm;
    private Integer egcyb;

    private Integer price;
    private String tips;
    private String vip;
}
