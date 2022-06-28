package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.Book;
import com.example.demo.entity.User;
import org.apache.ibatis.annotations.Update;

import java.util.Map;

public interface BookMapper extends BaseMapper<Book> {
    // 一对多查询
    //Page<User> findPage(Page<User> page, @Param("name") String name);

    //@Select("select count(id) count, address from user GROUP BY address")
    //List<UserAddressDto> countAddress();

    // 查询用户名
    //@Select("select password from user where name=#{name}")
    //User selectByName(String name);

    @Update("update user set password = #{newPass} where id = #{userId}")
    int updatePass(Map<String, Object> map);
}

