const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    
    // name:{type:String,required:true},
    // contact:{type:String,required:true},
    // address:{type:String,required:true},
    // gender:{type:String,required:true}

    stand_cls_notes:[{
    quality_of_class_notes:
        {"os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}

    },
    question_bank:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    ref_book:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    }
}],
    prep_vid_material:[{
    qual_vid_mat:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    prep_vid_mat:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    }
}],
    std_ia_ass_tut:[{
    gate_ref_que:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    usage_blooms_tax:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    on_tim_sub:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    }
}],
    inno_tea_learn:[{
    pre_ppt:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    var_ped_tea_meth:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    }
}],
    inno_in_tea_learn:[{
    on_time_submi:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    comp_course_file:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    }
}],
    perf_int_ass:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    per_end_sem:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    eff_lab_con:[{
    lab_man_prep:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    std_pre_post:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    con_bey_syl:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    on_time_comp:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    }
    }
],
eff_lab_con:[{
    lab_man_prep:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    std_pre_post:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    con_bey_syl:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    on_time_comp:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    }
    }
],
imp_ment_aca_per:[{
    cer_nptel:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    per_int_ass:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    perf_in_end_sem:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    },
    perf_in_end_ass:{
        "os1":{type:Number,required:true},
        "os2":{type:Number,required:true},
        "es1":{type:Number,required:true},
        "es2":{type:Number,required:true}
    }
    }
],












    // }

 },{
//     versionKey:false
 });
const user=mongoose.model('users',userSchema);
module.exports=user;