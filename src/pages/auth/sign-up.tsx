import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { registerRestaurant } from '@/api/register-restaurant'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignUpData, signUpValidation } from '@/validations/signup-validation'

export const SignUp = () => {
  const navigation = useNavigate()
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpValidation),
  })
  const { mutateAsync: signUpRestaurant } = useMutation({
    mutationFn: registerRestaurant,
  })

  const handleSignUp = async (data: SignUpData) => {
    try {
      await signUpRestaurant({
        restaurantName: data.restaurant_name,
        manager: data.manager_name,
        email: data.email,
        phone: data.phone,
      })
      toast.success('Estabelecimento cadastrado com sucesso', {
        action: {
          label: 'Login',
          onClick: () => navigation(`/sign-in?email=${data.email}`),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar estabelecimento')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button className="absolute right-8 top-8" asChild variant="ghost">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurant_name">Nome do estabelecimento</Label>
              <Input
                id="restaurant_name"
                type="text"
                {...register('restaurant_name')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="manager_name">Seu nome</Label>
              <Input
                id="manager_name"
                type="text"
                {...register('manager_name')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <Button className="w-full" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a
                className="underline underline-offset-4"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                Termos de serviço
              </a>{' '}
              e{' '}
              <a
                className="underline underline-offset-4"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                políticas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
