/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.controllers;

import com.infiniteskills.mvc.entity.Articles;
import com.infiniteskills.mvc.entity.Topics;
import com.infiniteskills.mvc.impl.ArticlesService;
import com.infiniteskills.mvc.impl.TopicsService;
import java.util.Date;
import java.util.List;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author
 */
@Controller
public class AdminCotroller {

    @Autowired
    private ArticlesService articleDAO;
    @Autowired
    private TopicsService topicsDAO;

    private static final Logger log = Logger.getLogger(AdminCotroller.class.getName());

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String getAdmin(Model model) {

        return "admin.html";
    }

    @RequestMapping(value = "/admin/add_article", method = RequestMethod.GET)
    public String getAddArticle(Model model) {

        //Articles article =new Articles();
        List<Topics> listTopics = topicsDAO.getAll();
        //model.addAttribute("article", article);
        model.addAttribute("listTopics", listTopics);
        return "add_article.html";
    }

    
    
    @RequestMapping(value = "/processAddArticle", method = RequestMethod.GET)
    public String processAddArticle(@RequestParam("type") Integer type, @RequestParam("name") String name, @RequestParam(value = "content", required = true) String content) {
     
        Articles article = new Articles();
        Topics topic = topicsDAO.get(type);
        article.setType(topic);
        article.setName(name);
        System.out.println(content);
        article.setContent(content);
        article.setDateadd(new Date());
        articleDAO.persist(article);
        return "redirect:/admin/add_article";
    }

    
    
    @RequestMapping(value = "/processAddArticleAdd", method = RequestMethod.GET)
    public String processAddArticleAdd(@ModelAttribute(value = "article") Articles article) {
        article.setDateadd(new Date());
        articleDAO.persist(article);
        return "redirect:/admin/add_article";

    }

}
