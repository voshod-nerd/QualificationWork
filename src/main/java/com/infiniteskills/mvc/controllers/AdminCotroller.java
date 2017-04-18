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
 * @author ой
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

    //@RequestParam("question") Integer idQuestion, @RequestParam("textanswer") String text
    @RequestMapping(value = "/processAddArticle", method = RequestMethod.GET)
    public String processAddArticle(@RequestParam("type") Integer type, @RequestParam("name") String name, @RequestParam(value="content",required=true) String content) {
        //public String processAddArticle(@ModelAttribute(value = "article") Articles article) {

        Articles article = new Articles();
        Topics topic = topicsDAO.get(type);
        article.setType(topic);
        article.setName(name);
        System.out.println(content);
        article.setContent(content);
        article.setDateadd(new Date());
        articleDAO.persist(article);
        return "redirect:/admin/add_article";
        //call.setDateadd(new Date());
        //call.setOpen(Boolean.TRUE);
        //callbackDAO.persist(call);

        //Callback newcall = new Callback();
        //model.addAttribute("mainMenuList", getMainMenuList());
        //model.addAttribute("callback", newcall);
        //return "home.html";
    }

}
