import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import './SkillsScreen.css';

import spring_framework_logo_icon from '../../resources/images/skills/spring_framework_icon.png';
import gnu_linux_logo_icon from '../../resources/images/skills/gnu_linux_icon.jpeg';
import mysql_sgbd_logo_icon from '../../resources/images/skills/sgbd_mysql_icon.webp';
import network_generic_logo_icon from '../../resources/images/skills/network_generic_icon.png';
import reactJs_framework_logo_icon from '../../resources/images/skills/reactJs_framework_icon.png';
import git_version_control_logo_icon from '../../resources/images/skills/git_version_control_icon.png';
import javascript_vanilla_logo_icon from '../../resources/images/skills/javascript_vanilla_icon.webp';
import html5_markup_language_logo_icon from '../../resources/images/skills/html_5_markup_language_icon.png';
import css3_style_language_logo_icon from '../../resources/images/skills/css_3_style_language_icon.png';
import python3_logo_icon from '../../resources/images/skills/python3_icon.webp';

import junit_software_testing_logo_icon from '../../resources/images/skills/junit_software_testing_framework_icon.png';
import api_restful_logo_icon from '../../resources/images/skills/api_restful_logo_icon.png';
import spring_security_framework_logo_icon from '../../resources/images/skills/spring_security_framework_icon.png';
import ajax_javascript_logo_icon from '../../resources/images/skills/ajax_javascript_logo_icon.png';
import redux_state_management_logo_icon from '../../resources/images/skills/redux_state_management_logo_icon.svg';
import clientSide_storage_logo_icon from '../../resources/images/skills/cookie_storage_browser_logo_icon.png';
import dom_javascript_logo_icon from '../../resources/images/skills/dom_javascript_icon.jpeg';


import java_core_exception_and_error_handling_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Exception_and_Error_Handling.webp';
import java_core_wrapper_of_primitive_type_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Wrapper_of_Primitive_Type.png';
import java_core_strings_constants_pool_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Strings_Constants_Pool.png';
import java_core_date_time_API_legacy_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Date-Time_API_Legacy.png'; 
import java_core_date_time_API_joda_time_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Date-Time_API _Joda-Time.png';
import java_core_internationalization_polymorphism_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Internationalization_Polymorphism.png';
import java_core_regex_regular_expression_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Regex_Regular_Expression.png';
import java_core_io_API_legacy_file_and_dir_operations_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_IO_API_Legacy_File_and_Dir_Operations.png';
import java_core_io_API_new_file_and_dir_operations_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_IO_API_New_File_and_Dir_Operations_Safe.png';
import java_core_io_serialization_and_deserialization_API_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Serialization_and_Deserialization_API.png'
import java_core_data_structures_low_level_implementation_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Data_Structures_Low_Level_Implementation.png';
import java_core_collections_API_data_structures_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Collections_API_Data_Structures.png'
import java_core_generics_type_replaces_object_context_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Generics_Type_Replaces_Object_Context.png'; 
import java_core_inner_class_four_types_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_boneca_chinesa_inside.png';
import java_core_functional_programming_lambdas_anonymous_functions_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Functional_Programming_Lambdas_Anonymous_Functions.png';
import java_core_functional_programming_method_reference_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Functional_Programming_Method_Reference.png';
import java_core_optional_class_null_pointer_handling_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Optional_Class_Null_Pointer_Handling.png';
import java_core_streams_API_simplifying_data_processing_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Streams_API_Simplifying_Data_Processing.png';
import java_core_threads_low_level_operations_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Threads_Low_Level_Operations.png';
import java_core_multithreading_synchronization_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Multithreading_Synchronization.png';
import java_core_multithreading_concurrency_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Multithreading_Concurrency.png';
import java_core_concurrent_API_Concurrency_Handling_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Concurrent_API_Concurrency_Handling.png';
import java_core_design_patterns_gang_of_four_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Design_Patterns_Gang_of_Four_GoF.png';
import java_core_JDBC_API_database_driver_and_connector_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_JDBC_API_Database_Driver_and_Connector.png';

export default function SkillsScreen() {
    return (
    <section id="main-skills--container">
        <div>
            <h1 className="main-title">&lsaquo;Habilidades&rsaquo;</h1>
            <div className="wrapper-skills">
                <article className="skill-tec">
                    <img className="icon" src={gnu_linux_logo_icon} alt="Logo do GNU/Linux" ></img>
                    <div className="right">
                        <h3 className="title-skill">GNU/Linux</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span className="-fav">Entusiasta ❤️</span>
                        <span><a className="-linkBoldYellow" href="https://drive.google.com/drive/folders/1igYf5NuYs8VA5A58EslDKrK9sUr2FHGQ?usp=sharing" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article> 
                <article className="skill-tec">
                    <img className="icon" src="data:image/png;base64,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" alt="Logo do Java" ></img>
                    <div className="right">
                        <h3 className="title-skill">Java Core</h3>
                        <progress className="progress-bar --skills" max="100" value="90">95%</progress>
                        <span className="-fav">Linguagem Fav. ❤️</span>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={spring_framework_logo_icon} alt="Logo do Spring" ></img>
                    <div className="right">
                        <h3 className="title-skill">Spring Ecosystem</h3>
                        <progress className="progress-bar --skills" max="100" value="75">75%</progress>
                        <span className="-fav">Especializando ❤️</span>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/SpringBootEssentials2-Study/blob/main/annotations/index.txt" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={junit_software_testing_logo_icon} alt="Logo do Junit5" ></img>
                    <div className="right">
                        <h3 className="title-skill">Software Testing</h3>
                        <progress className="progress-bar --skills" max="100" value="80">80%</progress>
                        <span className="-fav">Atualmente ❤️</span>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/SpringBootEssentials2-Study/tree/main/src/test/java/academy/devdojo/springboot2" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article> 
                <article className="skill-tec">
                    <img className="icon" src={api_restful_logo_icon} alt="Logo API RESTful Generic" ></img>
                    <div className="right">
                        <h3 className="title-skill">API RESTful</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/SpringBootEssentials2-Study/blob/main/annotations/index.txt" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article> 
                <article className="skill-tec">
                    <img className="icon" src={spring_security_framework_logo_icon} alt="Logo do Spring Security" ></img>
                    <div className="right">
                        <h3 className="title-skill">Spring Security</h3>
                        <progress className="progress-bar --skills" max="100" value="75">75%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/backupLg3Ecommerce-Springboot/tree/main/demo/src/main/java/com/example/demo/security" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article> 
                <article className="skill-tec">
                    <img className="icon" src={reactJs_framework_logo_icon} alt="Logo do ReacJs" ></img>
                    <div className="right">
                        <h3 className="title-skill">React.Js (CSR)</h3>
                        <progress className="progress-bar --skills" max="100" value="80">80%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/firstPortifolioGithubPages-2022" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={mysql_sgbd_logo_icon} alt="Logo do MySQL" ></img>
                    <div className="right">
                        <h3 className="title-skill">SGBD MySQL</h3>
                        <progress className="progress-bar --skills" max="100" value="70">70%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MySQL-Study/blob/main/DQL" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={ajax_javascript_logo_icon} alt="Logo do AJAX Concepts" ></img>
                    <div className="right">
                        <h3 className="title-skill">AJAX Concepts</h3>
                        <progress className="progress-bar --skills" max="100" value="70">70%</progress>
                        <span><a className="-linkBoldYellow" href="https://www.youtube.com/playlist?list=PLXik_5Br-zO9hDBdGmzX5XJ9LT6IcHPiG" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={redux_state_management_logo_icon} alt="Logo do Redux State Management" ></img>
                    <div className="right">
                        <h3 className="title-skill">Redux State Mg.</h3>
                        <progress className="progress-bar --skills" max="100" value="70">70%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/redux-Study-AlgaShopping-react/tree/main" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={clientSide_storage_logo_icon} alt="Logo do Client-side Storage" ></img>
                    <div className="right">
                        <h3 className="title-skill">Client-side Storage</h3>
                        <progress className="progress-bar --skills" max="100" value="70">70%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/backupLg3Ecommerce-Springboot/tree/main/frontend" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={dom_javascript_logo_icon} alt="Logo do DOM, Vitual DOM and Shadow DOM Javascript" ></img>
                    <div className="right">
                        <h3 className="title-skill">Virt./Shadow DOM</h3>
                        <progress className="progress-bar --skills" max="100" value="85">85%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/firstPortifolioGithubPages-2022" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={git_version_control_logo_icon} alt="Logo do Git" ></img>
                    <div className="right">
                        <h3 className="title-skill">Git Version Control</h3>
                        <progress className="progress-bar --skills" max="100" value="70">70%</progress>
                    </div>
                </article>                           
                <article className="skill-tec">
                    <img className="icon" src={javascript_vanilla_logo_icon} alt="Logo do JavaScript" ></img>
                    <div className="right">
                        <h3 className="title-skill">JavaScript Vanilla</h3>
                        <progress className="progress-bar --skills" max="100" value="80">80%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/firstPortifolioGithubPages-2022" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={html5_markup_language_logo_icon} alt="Logo do HTML5" ></img>
                    <div className="right">
                        <h3 className="title-skill">HTML5</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/firstPortifolioGithubPages-2022" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={css3_style_language_logo_icon} alt="Logo do CSS3" ></img>
                    <div className="right">
                        <h3 className="title-skill">CSS3</h3>
                        <progress className="progress-bar --skills" max="100" value="70">70%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/firstPortifolioGithubPages-2022" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src="data:image/jpeg;base64,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" alt="Logo do AspNetCore" ></img>
                    <div className="right">
                        <h3 className="title-skill">Windows Forms</h3>
                        <progress className="progress-bar --skills" max="100" value="30">30%</progress>
                        <span className="-OldStudy">08/2021{window.screen.width <= 425 ? "-":" até "}12/2021</span>
                        <span><a className="-linkBoldYellow" href="https://drive.google.com/drive/folders/1PGhOgWuOP1Clq6MlCTppBIYI0OZsEZv_?usp=sharing" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src="https://cdn.cdnlogo.com/logos/c/27/c.svg" alt="Logo do C#" ></img>
                    <div className="right">
                        <h3 className="title-skill">C# - OPP</h3>
                        <progress className="progress-bar --skills" max="100" value="60">60%</progress>
                        <span className="-OldStudy">06/2021{window.screen.width <= 425 ? "-":" até "}12/2021</span>
                        <span><a className="-linkBoldYellow" href="https://drive.google.com/drive/folders/1PGhOgWuOP1Clq6MlCTppBIYI0OZsEZv_?usp=sharing" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={python3_logo_icon} alt="Logo do Python" ></img>
                    <div className="right">
                        <h3 className="title-skill">Python3</h3>
                        <progress className="progress-bar --skills" max="100" value="50">50%</progress>
                        <span className="-OldStudy">01/2021{window.screen.width <= 425 ? "-":" até "}06/2021</span>
                        <span><a className="-linkBoldYellow" href="https://drive.google.com/drive/folders/14xScT9nHM9X-wwi2XncWkLGAIY0THfCc?usp=sharing" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={network_generic_logo_icon} alt="Logo Redes Internet" ></img>
                    <div className="right">
                        <h3 className="title-skill">Network</h3>
                        <progress className="progress-bar --skills" max="100" value="75">75%</progress>
                        <span className="-OldStudy">06/2021{window.screen.width <= 425 ? "-":" até "}06/2022</span>
                        <span><a className="-linkBoldYellow" href="https://drive.google.com/drive/folders/1BF_r6-pTfeBzA3w0u0CdUrZte48O9kOq?usp=sharing" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
            </div>

            <h1 className="main-title --java_core_skills">&lsaquo;Java Core&rsaquo;</h1>
            <div className="wrapper-skills">
                <article className="skill-tec">
                    <img className="icon" src={java_core_exception_and_error_handling_logo_icon} alt="Logo do Exception and Error Handling" ></img>
                    <div className="right">
                        <h3 className="title-skill">Exception and Error</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/exceptionsRuntimeExceptionsAndErrors" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article> 
                <article className="skill-tec">
                    <img className="icon" src={java_core_wrapper_of_primitive_type_logo_icon} alt="Logo do Wrapper of Primitive Type" ></img>
                    <div className="right">
                        <h3 className="title-skill">Wrapper Primitive Type</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/wrappersOfPrimitiveTypes" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article> 
                <article className="skill-tec">
                    <img className="icon" src={java_core_strings_constants_pool_logo_icon} alt="Logo do Strings Constants Pool" ></img>
                    <div className="right">
                        <h3 className="title-skill">String Constant Pool</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/stringsAndStringConstantPool" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_date_time_API_legacy_logo_icon} alt="Logo do Date-Time API - Legacy" ></img>
                    <div className="right">
                        <h3 className="title-skill">Date-Time API Legacy</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/dateTimeAPI" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={java_core_date_time_API_joda_time_logo_icon} alt="Logo do Date-Time API - Joda-Time" ></img>
                    <div className="right">
                        <h3 className="title-skill">Date-Time API New</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/dateTimeAPI" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={java_core_internationalization_polymorphism_logo_icon} alt="Logo do Internationalization - Polymorphism" ></img>
                    <div className="right">
                        <h3 className="title-skill">Internationalization</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/internationalization" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={java_core_regex_regular_expression_logo_icon} alt="Logo do Regex - Regular Expression" ></img>
                    <div className="right">
                        <h3 className="title-skill">Regex Regular Exp.</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/regexOrRegexp" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={java_core_io_API_legacy_file_and_dir_operations_logo_icon} alt="Logo do IO API Legacy - File and Dir Operations" ></img>
                    <div className="right">
                        <h3 className="title-skill">IO API Legacy</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/inputOutputLegacyAPI" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={java_core_io_API_new_file_and_dir_operations_logo_icon} alt="Logo do IO API New - File and Dir Operations" ></img>
                    <div className="right">
                        <h3 className="title-skill">IO API New</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/newInputOutputAPI" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={java_core_io_serialization_and_deserialization_API_logo_icon} alt="Logo do Serialization and Deserialization API" ></img>
                    <div className="right">
                        <h3 className="title-skill">IO Serialization API</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/H_serializacao" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_data_structures_low_level_implementation_logo_icon} alt="Logo do Data Structures - Low-Level Implementation" ></img>
                    <div className="right">
                        <h3 className="title-skill">Data Structures Impl.</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/ZA_estruturaDados" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_collections_API_data_structures_logo_icon} alt="Logo do Collections API - Data Structures" ></img>
                    <div className="right">
                        <h3 className="title-skill">Collections API</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/I_collections" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>    
                <article className="skill-tec">
                    <img className="icon" src={java_core_generics_type_replaces_object_context_logo_icon} alt="Logo do Generics Type - Replaces Object Context" ></img>
                    <div className="right">
                        <h3 className="title-skill">Generics Type</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/J_generics" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article> 
                <article className="skill-tec">
                    <img className="icon" src={java_core_inner_class_four_types_logo_icon} alt="Logo do Inner Class - Four Types" ></img>
                    <div className="right">
                        <h3 className="title-skill">Inner Class Four Type</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/K_classesInternas" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>     
                <article className="skill-tec">
                    <img className="icon" src={java_core_functional_programming_lambdas_anonymous_functions_logo_icon} alt="Logo do Func. Prog. Lambdas - Anonymous Functions" ></img>
                    <div className="right">
                        <h3 className="title-skill">Lambda Functions</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/M_lambdas" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article> 
                <article className="skill-tec">
                    <img className="icon" src={java_core_functional_programming_method_reference_logo_icon} alt="Logo do Func. Prog. Method Reference" ></img>
                    <div className="right">
                        <h3 className="title-skill">Method Reference</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/N_methodReference" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>   
                <article className="skill-tec">
                    <img className="icon" src={java_core_optional_class_null_pointer_handling_logo_icon} alt="Logo do Optional Class - Null Pointer Handling" ></img>
                    <div className="right">
                        <h3 className="title-skill">Optional Class</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/O_optional" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>   
                <article className="skill-tec">
                    <img className="icon" src={java_core_streams_API_simplifying_data_processing_logo_icon} alt="Logo do Streams API - Simplifying Data Processing" ></img>
                    <div className="right">
                        <h3 className="title-skill">Streams API</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/P_streams" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_threads_low_level_operations_logo_icon} alt="Logo do Threads - Low-Level Operations" ></img>
                    <div className="right">
                        <h3 className="title-skill">Thread Low-Level</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/Q_threads" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_multithreading_synchronization_logo_icon} alt="Logo do Multithreading - Synchronization" ></img>
                    <div className="right">
                        <h3 className="title-skill">Thread Synchronization</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/Q_threads/sincronismo" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_multithreading_concurrency_logo_icon} alt="Logo do Multithreading - Concurrency" ></img>
                    <div className="right">
                        <h3 className="title-skill">Thread Concurrency</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/R_concurrent" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_concurrent_API_Concurrency_Handling_logo_icon} alt="Logo do Concurrent API - Concurrency Handling" ></img>
                    <div className="right">
                        <h3 className="title-skill">Concurrent API</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/R_concurrent" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_design_patterns_gang_of_four_logo_icon} alt="Logo do Design Patterns - Gang Of Four (GoF)" ></img>
                    <div className="right">
                        <h3 className="title-skill">Design Patterns GoF</h3>
                        <progress className="progress-bar --skills" max="100" value="70">70%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/S_designPatterns" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_JDBC_API_database_driver_and_connector_logo_icon} alt="Logo do JDBC API - Database Driver and Connector" ></img>
                    <div className="right">
                        <h3 className="title-skill">JDBC DB Connection</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/T_jdbc" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
            </div>
        </div>
    </section>
    )
};
