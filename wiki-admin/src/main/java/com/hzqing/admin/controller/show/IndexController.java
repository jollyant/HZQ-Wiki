package com.hzqing.admin.controller.show;

import com.hzqing.admin.controller.base.BaseController;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author hzqing
 * @date 2020-01-16 13:00
 */
@Api("首页展示")
@Slf4j
@RequestMapping("/api/wiki/show/index")
@RestController
public class IndexController extends BaseController {

}
