using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VjezbaCS
{
    internal class CiklicnaMatrica
    {
        public static void Izvedi(int brojRedaka, int brojStupaca)
        {
            int[,] matrica = new int[brojRedaka, brojStupaca];

            int vrijednost = 1;
            int pocetakRedaka = 0;
            int krajRedaka = brojRedaka - 1;
            int pocetakStupaca = 0;
            int krajStupaca = brojStupaca - 1;

            while (pocetakRedaka <= krajRedaka && pocetakStupaca <= krajStupaca)
            {
                for (int i = pocetakStupaca; i <= krajStupaca; i++)
                {
                    matrica[pocetakRedaka, i] = vrijednost++;
                }
                pocetakRedaka++;

                for (int i = pocetakRedaka; i <= krajRedaka; i++)
                {
                    matrica[i, krajStupaca] = vrijednost++;
                }
                krajStupaca--;

                if (pocetakRedaka <= krajRedaka)
                {
                    for (int i = krajStupaca; i >= pocetakStupaca; i--)
                    {
                        matrica[krajRedaka, i] = vrijednost++;
                    }
                    krajRedaka--;
                }

                if (pocetakStupaca <= krajStupaca)
                {
                    for (int i = krajRedaka; i >= pocetakRedaka; i--)
                    {
                        matrica[i, pocetakStupaca] = vrijednost++;
                    }
                    pocetakStupaca++;
                }
            }

            // Ispis matrice
            for (int i = 0; i < brojRedaka; i++)
            {
                for (int j = 0; j < brojStupaca; j++)
                {
                    Console.Write($"{matrica[i, j],4}\t");
                }
                Console.WriteLine();
            }
        }
    }
}


