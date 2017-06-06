/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.controllers;

import com.infiniteskills.mvc.entity.Articles;
import com.infiniteskills.mvc.entity.Callback;
import com.infiniteskills.mvc.entity.Callgauger;
import com.infiniteskills.mvc.entity.Delivery;
import com.infiniteskills.mvc.entity.Listdelivery;
import com.infiniteskills.mvc.entity.Shares;
import com.infiniteskills.mvc.entity.Topics;
import com.infiniteskills.mvc.impl.ArticlesService;
import com.infiniteskills.mvc.impl.CallBackService;
import com.infiniteskills.mvc.impl.CallGaugerService;
import com.infiniteskills.mvc.impl.DeliveryService;
import com.infiniteskills.mvc.impl.ItemDeliveryService;
import com.infiniteskills.mvc.impl.ListDeliveryService;
import com.infiniteskills.mvc.impl.SharesService;
import com.infiniteskills.mvc.impl.TopicsService;
import java.io.UnsupportedEncodingException;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
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
    @Autowired
    private SharesService sharesDAO;
    @Autowired
    private ListDeliveryService listDeliveryDAO;
    @Autowired
    private DeliveryService deliveryDAO;
    

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

    @RequestMapping(value = "/processAddArticle", method = RequestMethod.POST)
    public String processAddArticle(Model model, @RequestParam("type") Integer type, @RequestParam("name") String name, @RequestParam(value = "content", required = true) String content) throws UnsupportedEncodingException {
        Articles article = new Articles();
        Topics topic = topicsDAO.get(type);
        String pcontent = new String(content.getBytes("ISO8859-1"), "UTF-8");
        String pname = new String(name.getBytes("ISO8859-1"), "UTF-8");
        article.setType(topic);
        article.setName(pname);
        System.out.println(content);
        article.setContent(pcontent);
        article.setDateadd(new Date());
        articleDAO.persist(article);

        //Формирование ответа что все прошло успешно
        List<Topics> listTopics = topicsDAO.getAll();
        model.addAttribute("listTopics", listTopics);
        model.addAttribute("IsAddArticle", true);
        return "add_article.html";

        //return "redirect:/admin/add_article";
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

    @RequestMapping(value = "/processUpdateArticle", method = RequestMethod.POST)
    public String processUpdateArticle(@RequestParam("id") Integer id, @RequestParam("type.id") Integer type, @RequestParam("name") String name, @RequestParam(value = "content", required = true) String content) throws UnsupportedEncodingException {
        Articles article = articleDAO.get(id);
        Topics topic = topicsDAO.get(type);

        String pcontent = new String(content.getBytes("ISO8859-1"), "UTF-8");
        String pname = new String(name.getBytes("ISO8859-1"), "UTF-8");

        article.setType(topic);
        article.setName(pname);
        article.setContent(pcontent);
        articleDAO.update(article);
        return "redirect:/admin/listAllArticles";
    }

    @RequestMapping(value = "/admin/callback", method = RequestMethod.GET)
    public String processCallBack(Model model) {
        List<Callback> listCallBack = callbackDAO.getAll();

        model.addAttribute("listCallback", listCallBack);
        return "callBack.html";
    }

    @RequestMapping(value = "/admin/updatecallback", method = RequestMethod.POST)
    public String updateCallBack(@RequestParam("id") Integer id, @RequestParam(value = "open", required = false) Boolean open, @RequestParam("desc") String desc) {
        Callback callback = callbackDAO.get(id);
        callback.setDateclose(new Date());
        callback.setOpen(true);
        callback.setDescription(desc);
        System.out.println(desc);
        callbackDAO.update(callback);
        return "redirect:/admin/callback";
    }

    @RequestMapping(value = "/admin/callgauger", method = RequestMethod.GET)
    public String processCallGauger(Model model) {
        List<Callgauger> listCallGauger = callGaugerDAO.getAll();
        model.addAttribute("listCallGauger", listCallGauger);
        return "adminGauger.html";
    }

    @RequestMapping(value = "/admin/updateCallGauger", method = RequestMethod.POST)
    public String updateGauger(@RequestParam("id") Integer id, @RequestParam(value = "open", required = false) Boolean open, @RequestParam("desc") String desc) {
        Callgauger gauger = callGaugerDAO.get(id);
        gauger.setDateclose(new Date());
        gauger.setOpen(true);
        gauger.setDescription(desc);
        System.out.println(desc);
        callGaugerDAO.update(gauger);
        return "redirect:/admin/callback";
    }

    @RequestMapping(value = "/admin/emaillist", method = RequestMethod.GET)
    public String getEmailList(Model model) {
        return "emaillist.html";
    }

    @RequestMapping(value = "/admin/delivery", method = RequestMethod.GET)
    public String createDelivery(Model model) {
        return "delivery.html";
    }

    @RequestMapping(value = "/processAddShares", method = RequestMethod.POST)
    public String processAddShares(Model model, @RequestParam("name") String name, @RequestParam(value = "content", required = true) String content) throws UnsupportedEncodingException {
        Shares share = new Shares();

        String pcontent = new String(content.getBytes("ISO8859-1"), "UTF-8");
        String pname = new String(name.getBytes("ISO8859-1"), "UTF-8");

        share.setName(pname);
        System.out.println(content);
        share.setContent(pcontent);
        share.setDatedelivery(new Date());
        sharesDAO.persist(share);
        model.addAttribute("IsAddShares", true);
        return "delivery.html";
    }

    @RequestMapping(value = "/admin/deleteshares", method = RequestMethod.GET)
    public String deleteShare(@RequestParam("id") Integer id) {
        Shares share = sharesDAO.get(id);
        sharesDAO.delete(share);
        return "redirect:/admin/listshares";
    }

    @RequestMapping(value = "/admin/listshares", method = RequestMethod.GET)
    public String showAllDeliveryList(Model model) {
        List<Shares> listShares = sharesDAO.getAll();
        List<Listdelivery> listDel = listDeliveryDAO.getAll();
        model.addAttribute("listDelivery", listDel);
        model.addAttribute("listShares", listShares);
        return "listshares.html";
    }
    
    @RequestMapping(value = "/processDelivery", method = RequestMethod.POST)
    public String createDeleiviry(Model model,@RequestParam("idshare") Integer idShare, @RequestParam("idlistdelivery") Integer idListDelivery) {
        Delivery delivery = new Delivery();
        Shares share=sharesDAO.get(idShare);
        Listdelivery item; 
        item=listDeliveryDAO.get(idListDelivery);
        delivery.setIdListdelivery(item);
        delivery.setIdShares(share);
        deliveryDAO.persist(delivery);
        
        
        List<Shares> listShares = sharesDAO.getAll();
        List<Listdelivery> listDel = listDeliveryDAO.getAll();
        model.addAttribute("listDelivery", listDel);
        model.addAttribute("listShares", listShares);
        model.addAttribute("OK",true);
        return "listshares.html";
    }
    
    

    @RequestMapping(value = "/admin/сreatelist", method = RequestMethod.GET)
    public String createDeliveryList(Model model) {

        return "createlist.html";
    }
    
    @RequestMapping(value = "/admin/price", method = RequestMethod.GET)
    public String getPriceList(Model model) {
        return "price.html";
    }
    
}
