/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.report;

import com.infiniteskills.mvc.entity.Order1;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;

/**
 *
 * @author Талалаев
 */
public class PaySheetReport {

    public File doReport(Order1 progiv) throws IOException {
        /*  POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream("C:/TEMP1/ancet.xls"));
        HSSFWorkbook wb = new HSSFWorkbook(fs);
        HSSFSheet sheet = wb.getSheetAt(0);
        HSSFRow row = null;
        HSSFCell cell = null;
      
      FileOutputStream fileOut = new FileOutputStream("C:/TEMP1/output.xls");
            wb.write(fileOut);
            fileOut.close();
         */
        return new File("C:/mytemp/output.xls");

    }

}
