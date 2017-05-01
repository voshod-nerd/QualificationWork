/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.controllers;

import com.infiniteskills.mvc.entity.Articles;
import com.infiniteskills.mvc.entity.Callback;
import com.infiniteskills.mvc.entity.Callgauger;
import com.infiniteskills.mvc.entity.Topics;
import com.infiniteskills.mvc.impl.ArticlesService;
import com.infiniteskills.mvc.impl.CallBackService;
import com.infiniteskills.mvc.impl.CallGaugerService;
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
    @Autowired
    private CallBackService callbackDAO;
    @Autowired
    private CallGaugerService callGaugerDAO;

    private static final Logger log = Logger.getLogger(AdminCotroller.class.getName());

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String getAdmin(Model model) {

        return "admin.html";
    }

    // edit,add,delete articles
    @RequestMapping(value = "/admin/add_article", method = RequestMethod.GET)
    public String getAddArticle(Model model) {
        List<Topics> listTopics = topicsDAO.getAll();
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

    @RequestMapping(value = "/admin/listAllArticles", method = RequestMethod.GET)
    public String listAllArticles(Model model) {
        List<Articles> listArticles = articleDAO.getAll();
        model.addAttribute("listArticles", listArticles);
        return "listArticles.html";

    }

    @RequestMapping(value = "/admin/deletearticle", method = RequestMethod.GET)
    public String processDeleteArticle(@RequestParam("id") Integer id) {
        Articles article = articleDAO.get(id);
        articleDAO.delete(article);
        return "redirect:/admin/listAllArticles";
    }

    @RequestMapping(value = "/admin/editarticle", method = RequestMethod.GET)
    public String processEditArticle(@RequestParam("id") Integer id, Model model) {
        Articles article = articleDAO.get(id);
        List<Topics> listTopics = topicsDAO.getAll();
        model.addAttribute("listTopics", listTopics);
        model.addAttribute("article", article);
        return "editArticle.html";
    }

    @RequestMapping(value = "/processUpdateArticle", method = RequestMethod.GET)
    public String processUpdateArticle(@RequestParam("id") Integer id, @RequestParam("type.id") Integer type, @RequestParam("name") String name, @RequestParam(value = "content", required = true) String content) {

        Articles article = articleDAO.get(id);
        Topics topic = topicsDAO.get(type);
        article.setType(topic);
        article.setName(name);
        article.setContent(content);
        articleDAO.update(article);
        return "redirect:/admin/listAllArticles";
    }

    @RequestMapping(value = "/admin/callback", method = RequestMethod.GET)
    public String processCallBack(Model model) {
        List<Callback> listCallBack = callbackDAO.getAll();

        model.addAttribute("listCallback", listCallBack);
        return "callBack.html";
    }

    @RequestMapping(value = "/admin/callgauger", method = RequestMethod.GET)
    public String processCallGauger(Model model) {
        List<Callgauger> listCallGauger = callGaugerDAO.getAll();
        model.addAttribute("listCallGauger", listCallGauger);
        return "adminGauger.html";
    }

}
