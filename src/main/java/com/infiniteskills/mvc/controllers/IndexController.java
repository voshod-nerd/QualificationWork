package com.infiniteskills.mvc.controllers;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.infiniteskills.mvc.entity.Articles;
import com.infiniteskills.mvc.entity.Callback;
import com.infiniteskills.mvc.entity.Callgauger;
import com.infiniteskills.mvc.entity.Zakaz;

import com.infiniteskills.mvc.entity.Topics;
import com.infiniteskills.mvc.entity.Typeusers;
import com.infiniteskills.mvc.entity.Users;
import com.infiniteskills.mvc.impl.ArticlesService;
import com.infiniteskills.mvc.impl.CallBackService;
import com.infiniteskills.mvc.impl.CallGaugerService;
import com.infiniteskills.mvc.impl.TopicsService;
import com.infiniteskills.mvc.impl.TypeUsersService;
import com.infiniteskills.mvc.impl.UsersService;
import com.infiniteskills.mvc.model.MainMenuItem;
import com.infiniteskills.mvc.report.PaySheetReport;
import com.infiniteskills.mvc.service.TypeUsersRepository;
import com.infiniteskills.mvc.service.UsersRepository;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;

import java.util.List;
import java.util.Locale;
import java.util.Optional;
import javax.servlet.http.HttpServletResponse;

import javax.validation.Valid;
import org.apache.log4j.Logger;
import static org.apache.poi.hssf.usermodel.HeaderFooter.file;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Main controller of program,which process request from clients page
 *
 * @author
 *
 */
@Controller
public class IndexController {

    private static final Logger log = Logger.getLogger(IndexController.class.getName());
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UsersService usersDAO;
    @Autowired
    public TypeUsersService typeUserDAO;
    @Autowired
    public TopicsService topicsDAO;
    @Autowired
    public ArticlesService aritclesDAO;
    @Autowired
    public CallBackService callbackDAO;
    @Autowired
    public CallGaugerService gaugerbackDAO;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getHome(Model model) {
        Callback call = new Callback();
        model.addAttribute("mainMenuList", getMainMenuList());
        model.addAttribute("callback", call);
        return "home.html";
    }

    @RequestMapping(value = "/showarticle", method = RequestMethod.GET)
    public String getShowArticle(Model model, @RequestParam("id") Integer id) {

        Articles article = aritclesDAO.get(id);

        Callback call = new Callback();
        model.addAttribute("article", article);
        model.addAttribute("mainMenuList", getMainMenuList());
        model.addAttribute("callback", call);
        return "showarticle.html";
    }

    @RequestMapping(value = "/callgauger", method = RequestMethod.GET)
    public String getCallGauger(Model model) {

        Callback call = new Callback();
        Callgauger gauger = new Callgauger();
        model.addAttribute("mainMenuList", getMainMenuList());
        model.addAttribute("callback", call);
        model.addAttribute("gauger", gauger);
        return "callgauger.html";
    }

    @RequestMapping(value = "/constructor", method = RequestMethod.GET)
    public String getContructor(Model model) {

        Callback call = new Callback();

        model.addAttribute("mainMenuList", getMainMenuList());
        model.addAttribute("callback", call);

        return "constructor.html";
    }

    @RequestMapping(value = "/processCallGauger", method = RequestMethod.POST)
    public String processGaugerForm(@ModelAttribute(value = "gauger") Callgauger gauger, ModelMap model) throws UnsupportedEncodingException {

        gauger.setDateadd(new Date());
        gauger.setOpen(Boolean.FALSE);
        String ptype = new String(gauger.getType().getBytes("ISO8859-1"), "UTF-8");
        String pfio = new String(gauger.getFio().getBytes("ISO8859-1"), "UTF-8");
        String pdescription = new String(gauger.getDescription().getBytes("ISO8859-1"), "UTF-8");
        String padress = new String(gauger.getAdres().getBytes("ISO8859-1"), "UTF-8");

        gauger.setFio(pfio);
        gauger.setType(ptype);
        gauger.setDescription(pdescription);
        gauger.setAdres(padress);

        gaugerbackDAO.persist(gauger);

        Callback call = new Callback();
        Callgauger gaugerNew = new Callgauger();
        model.clear();
        model.addAttribute("gauger", gaugerNew);
        model.addAttribute("isSuccess", true);
        model.addAttribute("mainMenuList", getMainMenuList());
        model.addAttribute("callback", call);
        return "callgauger.html";
    }

    @RequestMapping(value = "/newuser", method = RequestMethod.GET)
    public String getAddNewUser(Model model) {

        Users user = new Users();

        model.addAttribute("user", user);

        return "newuser.html";
    }

    @RequestMapping(value = "/processNewUser", method = RequestMethod.POST)
    public String processNewUser(@ModelAttribute(value = "user") Users user) {

        Optional<String> role = Optional.of("ROLE_ADMIN");
        Typeusers typeUser = typeUserDAO.getTypeUserByName(role);
        user.setIdtypeuser(typeUser);
        BCryptPasswordEncoder n = new BCryptPasswordEncoder();
        System.out.println(user.getPassword());
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        usersDAO.persist(user);
        return "redirect:/";

    }

    @RequestMapping(value = "/processCallBack", method = RequestMethod.POST)
    public String processCallBackForm(@ModelAttribute(value = "callback") Callback call, ModelMap model) throws UnsupportedEncodingException {
        call.setDateadd(new Date());
        call.setOpen(Boolean.FALSE);
        String pfio = new String(call.getFio().getBytes("ISO8859-1"), "UTF-8");
        call.setFio(pfio);

        callbackDAO.persist(call);
        Callback newcall = new Callback();
        model.addAttribute("isSuccess", true);
        model.addAttribute("mainMenuList", getMainMenuList());
        model.addAttribute("callback", newcall);
        return "home.html";
    }

    public List<MainMenuItem> getMainMenuList() {
        List<Topics> listTopics = topicsDAO.getAll();
        List<Articles> listArticles = aritclesDAO.getAll();

        List<MainMenuItem> mainMenu = new ArrayList<>();
        for (Topics x : listTopics) {
            MainMenuItem item = new MainMenuItem(x.getName(), x.getId());

            for (Articles y : listArticles) {
                if (y.getType().equals(x)) {
                    item.AddSumMenu(y);
                }
            }
            mainMenu.add(item);
        }

        return mainMenu;

    }

    /**
     * Login form.
     *
     * @return
     */
    @RequestMapping("/login")
    public String login() {
        return "login.html";
    }

    /**
     * Login form with error.
     *
     * @param model
     * @return
     */
    @RequestMapping("/login-error")
    public String loginError(Model model) {
        model.addAttribute("loginError", true);
        return "login.html";
    }

    /**
     * Error page.
     *
     * @return
     */
    @RequestMapping("/403")
    public String forbidden() {
        return "403.html";
    }
    
    
    /*
     @RequestMapping(method = RequestMethod.POST,
            path = "/report/tets",
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public void createU( HttpServletResponse response,@RequestBody Order1 zav) throws  IOException {
        System.out.println("Проверка");
        System.out.println(zav.getPrice());
        //return zav;
        File file = null;
        
        PaySheetReport report = new PaySheetReport();
        file = report.doReport(zav);
        String mimeType = "application/octet-stream";
        System.out.println("mimetype : " + mimeType);
        response.setContentType(mimeType);
        response.setHeader("Content-Disposition", String.format("inline; filename=\"" + file.getName() + "\""));
        response.setContentLength((int) file.length());
        InputStream inputStream = new BufferedInputStream(new FileInputStream(file));
        FileCopyUtils.copy(inputStream, response.getOutputStream());
        
        
    }

    @RequestMapping(value = "/report", method = RequestMethod.POST)
    public void downloadFile(HttpServletResponse response, @RequestBody  Order1 ord) throws IOException {
        System.out.println(ord);
        File file = null;
        Order1 order = new Order1();
        System.out.println(ord.getPrice());
        //JSON from String to Object
        //ObjectMapper mapper = new ObjectMapper();
        //mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        //Order1 order = mapper.readValue(ord, Order1.class);
        //System.out.println(order.getPrice());

        PaySheetReport report = new PaySheetReport();
        file = report.doReport(order);

        if (!file.exists()) {
            String errorMessage = "Sorry. The file you are looking for does not exist";
            System.out.println(errorMessage);
            try (OutputStream outputStream = response.getOutputStream()) {
                outputStream.write(errorMessage.getBytes(Charset.forName("UTF-8")));
            }
            return;
        }
        String mimeType = "application/octet-stream";
        System.out.println("mimetype : " + mimeType);
        response.setContentType(mimeType);
        response.setHeader("Content-Disposition", String.format("inline; filename=\"" + file.getName() + "\""));
        response.setContentLength((int) file.length());
        InputStream inputStream = new BufferedInputStream(new FileInputStream(file));
        FileCopyUtils.copy(inputStream, response.getOutputStream());

    }
   */

    /*@RequestMapping(path = "/", method = RequestMethod.GET)
    public String goEnter(ModelMap model) {
        log.info("��� �������������� ���������!");
        List<Category> allCategories = categoryDAO.findAll();
        List<Questions> allQuestion = questionDAO.findAll();
        model.addAttribute("listCategories", allCategories);
        model.addAttribute("listQuestions", allQuestion);
        return "index";
    }
     */
 /*
    * Method return name  main jsp page of site
    @return name of jsp page  
     */
 /*
    @RequestMapping(path = "/index", method = RequestMethod.GET)
    public String goIndex(ModelMap model) {
        List<Category> allCategories = categoryDAO.findAll();
        List<Questions> allQuestion = questionDAO.findAll();
        model.addAttribute("listCategories", allCategories);
        model.addAttribute("listQuestions", allQuestion);
        return "index.html";
    }

    /*
    * Method return name  main jsp with certains category goods page
    @param Int category of foods
    @param ModelMap
    @return name of jsp page  
     */
 /*
    @RequestMapping(path = "/indexcat", method = RequestMethod.GET)
    public String goIndexCategory(@RequestParam("category") Integer category, ModelMap model) {

        List<Category> allCategories = categoryDAO.findAll();
        List<Questions> allQuestion = questionDAO.getQuestionsByCategory(category);
        model.addAttribute("listCategories", allCategories);
        model.addAttribute("listQuestions", allQuestion);
        return "index";
    }

    /*
    * Method return name  login page
    @return name of jsp page  
     */
 /*
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String goLoginUser() {
        return "login";
    }
     */
 /*
    * Method return name   jsp page to add answer to certain question
    @param Id of question
    @param ModelMap
    @return name of jsp page  
     */
 /*
    @RequestMapping(value = "/addanswer", method = RequestMethod.GET)
    public String addAnswer(@RequestParam("id") Integer id, ModelMap model) {

        Questions question = questionDAO.getById(id);
        List<Answers> listAnswers = answerDAO.getByQuestion(question);

        for (Answers x : listAnswers) {
            System.out.println(x.getText());
        }

        model.addAttribute("listAnswers", listAnswers);
        model.addAttribute("question", question);

        return "addanswer";
    }
     */
 /*
    * Method return name jsp page to adding question
    @param ModelMap
    @return name of jsp page  
     */
 /*
    @RequestMapping(value = "/addquestion", method = RequestMethod.GET)
    public String addQuestion(ModelMap model) {

        List<Category> allCategories = categoryDAO.findAll();

        model.addAttribute("listCategories", allCategories);

        return "addquestion";
    }

    /*
    * Method gets question from client and save it  
    @param name of question
    @param fulltext of question
    @param category of foods
     
     */
 /*
    @RequestMapping(value = "/postquestion", method = RequestMethod.POST)
    public String postQuestion(@RequestParam("name") String name, @RequestParam("fulltext") String fulltext, @RequestParam("category") int category) {

        Questions question = new Questions();
        question.setDateadd(new Date());
        question.setFulltext(fulltext);
        question.setName(name);

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        Users user = usersDAO.findUserByLogin(username);

        question.setIduser(user);
        List<Category> list = categoryDAO.findAll();
        Category cat = null;
        for (Category x : list) {
            if ((x.getId().compareTo(category) == 0)) {
                cat = x;
                break;
            }
        }
        question.setIdcategory(cat);
        questionDAO.create(question);
        return "redirect:index";
    }

    /* Method gets answer from client and save it  
    *  @param id question
    *  @param textanswer - full text answer
     */
 /*
    @RequestMapping(value = "/postanswer", method = RequestMethod.POST)
    public String postAnswer(@RequestParam("question") Integer idQuestion, @RequestParam("textanswer") String text) {

        Answers answer = new Answers();
        answer.setDateadd(new Date());
        answer.setText(text);
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        Users user = usersDAO.findUserByLogin(username);
        answer.setIduser(user);
        Questions question = questionDAO.getById(idQuestion);
        answer.setIdquestion(question);
        answerDAO.create(answer);
        return "redirect:addanswer?id=" + question.getId().toString();
    }

    /* Method return name   jsp page to view profil user 
    @param ModelMap
    @return name of jsp page
     */
 /*
    @RequestMapping(value = "/viewprofil", method = RequestMethod.GET)
    public String viewProfil(ModelMap model) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        Users user = usersDAO.findUserByLogin(username);
        model.addAttribute("user", user);
        return "viewprofil";
    }

    /* Method return name   jsp page to edit profil user 
    @param ModelMap
    @return name of jsp page
     */
 /*
    @RequestMapping(value = "/editprofil", method = RequestMethod.GET)
    public String editProfil(ModelMap model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        Users user = usersDAO.findUserByLogin(username);
        model.addAttribute("user", user);

        return "editprofil";
    }

    /* Method return name login jsp page and save name,email and password new registered user 
    @param Users class 
    @return name of login jsp page
     */
 /*
    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public String testValidation(@Valid Users user) {
        Typeusers typeUser = typeUserDAO.getTypeUserByName("ROLE_USER");
        user.setIdtypeuser(typeUser);
        BCryptPasswordEncoder n = new BCryptPasswordEncoder();
        user.setPassword(n.encode(user.getPassword()));
        usersDAO.create(user);
        return "login";
    }
     */
}
