<?php

namespace App\Controller;

use App\Factory\PDOFactory;
use App\Model\ExerciceModel;


class ExerciceController extends BaseController
{
    // Get all exercices
    public function executeExerciceList()
    {
        if ($this->HTTPRequest->isMethodAllowed('GET') && ($this->HTTPRequest->isUserAllowed()))
        {
            $contentModel = new ExerciceModel(new PDOFactory());
            $exercice = $contentModel->getAllExercice();
            return $this->renderJSON($exercice);
        }
    }

}