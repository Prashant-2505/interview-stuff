#include <bits/stdc++.h>
using namespace std;

class Graph
{
    int V;
    unordered_map<int, list<int>> adjList;

public:
    Graph(int v)
    {
        V = v;
    }

    void insertEdge(int u, int v, bool dir)
    {
        adjList[u].push_back(v);
        if (dir == false)
        {
            adjList[v].push_back(u);
        }
    }

    void print()
    {
        for (auto it : adjList)
        {
            cout << it.first << " -> ";
            for (auto i : it.second)
            {
                cout << i << " ";
            }
            cout << endl;
        }
    }

    void topoHelper(int node, vector<bool>&visited, stack<int> &st)
    {
        visited[node] = true;
        for (auto i : adjList[node])
        {
            if (!visited[i])
            {
                topoHelper(i, visited, st);
            }
        }
        st.push(node);
    }

    void topoSort()
    {
        vector<bool> visited(V + 1, false);
        stack<int> st;

        for (int i = 1; i <= V; i++)
        {
            if (!visited[i])
            {
                topoHelper(i, visited, st);
            }
        }

        cout << "Here is toposort" << endl;
        while (!st.empty())
        {
            cout << st.top() << " ";
            st.pop();
        }
    }
};

int main()
{

    int vertex, edges;
    cout << "Enter the number of vertices: ";
    cin >> vertex;
    cout << "Enter the number of edges: ";
    cin >> edges;

    Graph *g = new Graph(vertex);

    for (int i = 0; i < edges; i++)
    {
        int u, v;
        cout << "Enter the edge " << i + 1 << ": ";
        cin >> u >> v;
        g->insertEdge(u, v, true);
    }

    g->print();
    g->topoSort();
    return 0;
}