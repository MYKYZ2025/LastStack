<?php

namespace App\Form;

use App\Entity\Planet;
//use Doctrine\DBAL\Types\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class PlanetType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
            {$builder
            ->add('name', TextareaType::class, [
                'attr' => [
                    'class' => '!text-black bg-white p-2 rounded w-full',
                ],
            ])
            ->add('description')
            ->add('lightYearsFromEarth')
            ->add('imageFilename', ChoiceType::class, [
                'choices' => [
                    'Choose an image...' => '',
                    'Planet 1' => 'planet-1.png',
                    'Planet 2' => 'planet-2.png',
                    'Planet 3' => 'planet-3.png',
                    'Planet 4' => 'planet-4.png',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Planet::class,
        ]);
    }
}
