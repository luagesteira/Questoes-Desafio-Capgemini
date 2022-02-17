import javax.swing.*;

/*
Débora se inscreveu em uma rede social para se manter em contato com seus amigos.
A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a
senha precisa ser forte. O site considera uma senha forte quando ela satisfaz os
seguintes critérios:

Possui no mínimo 6 caracteres.
Contém no mínimo 1 digito.
Contém no mínimo 1 letra em minúsculo.
Contém no mínimo 1 letra em maiúsculo.
Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+

Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza
se é uma senha forte. Para ajudar Débora, construa um algoritmo que informe qual
é o número mínimo de caracteres que devem ser adicionados para uma string qualquer
ser considerada segura.

Exemplo:

Entrada:
Ya3

Saída:
3

 */

public class questao2 {
    public static void main(String[] args) {

        //Input da senha escolhida
        String senha = JOptionPane.showInputDialog(null,
                "Digite a senha escolhida",
                "Senha", JOptionPane.INFORMATION_MESSAGE);

        //Contagem da quantidade de caracteres que a senha possui
        int qtdCaracteres = senha.length();

        //Mostrando no console quantos caracteres faltam
        if(qtdCaracteres < 6) {
            qtdCaracteres = 6 - qtdCaracteres;
            System.out.println("Faltam " + qtdCaracteres + " caracteres na senha para ela ser considerada segura.");
        }else {
            System.out.println("A senha tem a quantidade de caracteres desejado");
        }
    }
}
